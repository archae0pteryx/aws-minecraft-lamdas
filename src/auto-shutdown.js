const AWS = require('aws-sdk')

const ec2 = new AWS.EC2()

const { INSTANCE_ID } = process.env

const SHUTDOWN_AFTER = 60 // min

const EC2_PARAMS = {
  InstanceIds: [INSTANCE_ID],
}

exports.handler = async (event) => {
  const now = Date.now()
  const data = await ec2.describeInstances(EC2_PARAMS).promise()
  const instance = data.Reservations?.[0].Instances?.[0]
  if (!instance) {
    throw new Error('Autoshutdown cant find instance')
  }
  const launchTime = Date.parse(instance.LaunchTime)
  const serverUpForMins = Math.floor((now - launchTime) / 1000 / 60)
  if (serverUpForMins >= SHUTDOWN_AFTER) {
    await ec2
      .stopInstances({
        InstanceIds: [INSTANCE_ID],
      })
      .promise()
    console.log(`shutdown: ${INSTANCE_ID}`)
    return
  }
  console.log(
    `Server not shutdown. uptime: ${serverUpForMins} minutes. Shutdown after: ${SHUTDOWN_AFTER}`
  )
  return
}
