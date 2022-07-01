const AWS = require('aws-sdk')

const ec2 = new AWS.EC2()
const hasOnlinePlayer = require('./hasOnlinePlayer')

const { INSTANCE_ID, SHUTDOWN_AFTER_MINS } = process.env

const EC2_PARAMS = {
  InstanceIds: [INSTANCE_ID],
}

function _shutdownInstance() {
  return ec2
    .stopInstances({
      InstanceIds: [INSTANCE_ID],
    })
    .promise()
}

function _hasTimeExpired(launchTime) {
  const now = Date.now()
  const serverUpForMins = Math.floor((now - launchTime) / 1000 / 60)
  return serverUpForMins >= SHUTDOWN_AFTER_MINS
}

function _shouldServerShutdown(launchTime) {
  return _hasTimeExpired(launchTime) && !hasOnlinePlayer()
}

exports.handler = async (event) => {
  // const now = Date.now()
  const data = await ec2.describeInstances(EC2_PARAMS).promise()
  const instance = data.Reservations?.[0].Instances?.[0]
  if (!instance) {
    throw new Error('Autoshutdown cant find instance')
  }
  const launchTime = Date.parse(instance.LaunchTime)
  const shouldShutdown = _shouldServerShutdown(instance.LaunchTime)
  if (shouldShutdown) {
    const res = await _shutdownInstance()
    return {
      statusCode: 200,
      body: res,
    }
  }
  return {
    statusCode: 200,
    body: 'Should not shutdown server',
  }
}
