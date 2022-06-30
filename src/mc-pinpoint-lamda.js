const AWS = require('aws-sdk')

const ec2 = new AWS.EC2()

const { INSTANCE_ID } = process.env

const EC2_PARAMS = {
  InstanceIds: [INSTANCE_ID],
}

async function _currentInstanceState() {
  const data = await ec2.describeInstanceStatus(EC2_PARAMS).promise()
  return data?.InstanceStatuses?.[0]?.InstanceState?.Name?.toUpperCase()
}

async function handleEc2Restart() {
  const instanceState = await _currentInstanceState()
  if (instanceState === 'RUNNING') {
    console.log(`[+] Restarting [${INSTANCE_ID}]`)
    return ec2.rebootInstances(EC2_PARAMS).promise()
  }
  console.log(`[-] Restart ignored. Server isn't up.`)
}

async function handleEc2Stop() {
  const instanceState = await _currentInstanceState()
  if (instanceState === 'RUNNING') {
    console.log(`[+] Stopping [${INSTANCE_ID}]`)
    return ec2.stopInstances(EC2_PARAMS).promise()
  }
  console.log(`[-] Ignore stop command. Server not running`)
}

async function handleEc2Start() {
  const instanceState = await _currentInstanceState()
  if (instanceState !== 'RUNNING') {
    console.log(`[+] Starting [${INSTANCE_ID}]`)
    return ec2.startInstances(EC2_PARAMS).promise()
  }
  console.log(`[-]Start triggered but [${INSTANCE_ID}] already running`)
}

const KEYWORD_COMMANDS = {
  'SERVER START': handleEc2Start,
  'SERVER STOP': handleEc2Stop,
  'SERVER RESTART': handleEc2Restart,
}

exports.handler = async (event, context, callback) => {
  try {
    const message = JSON.parse(event.Records[0].Sns.Message)
    const res = await KEYWORD_COMMANDS?.[message.messageBody]()

    return {
      statusCode: 200,
      body: JSON.stringify(res),
    }
  } catch (err) {
    console.error(err.message)
    return {
      statusCode: 500,
      body: JSON.stringify(err.message),
    }
  }
}
