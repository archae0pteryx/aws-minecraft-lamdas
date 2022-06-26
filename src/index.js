const AWS = require('aws-sdk')
const { handleEc2Start } = require('./handleEc2Start')
const { handleEc2Stop } = require('./handleEc2Stop')
const { handleEc2StateChange } = require('./handleEc2StateChange')
const { handleEc2Restart } = require('./handleEc2Restart')

const ec2 = new AWS.EC2()

const KEYWORD_COMMANDS = {
  'SERVER START': handleEc2Start,
  'SERVER STOP': handleEc2Stop,
  'SERVER RESTART': handleEc2Restart,
  'RUNNING': handleEc2StateChange,
  'STOPPED': handleEc2StateChange
}

async function handleSnsEvent(ec2, { Message }) {
  const { messageBody } = JSON.parse(Message)
  return KEYWORD_COMMANDS[messageBody](ec2)
}

function normalizeEvent(event) {
  const isPinpointCommand = event.Records && event.Records.length !== 0
  const isStateChangeEvent = event.source === 'aws.ec2'
  const isDescribe = event.Reservations?.[0]?.Instances?.[0].State.Name
  if (isPinpointCommand) {
    const message = JSON.parse(event.Records[0].Sns.Message)
    return message.messageBody
  } else if (isStateChangeEvent) {
    return event.detail.state.toUpperCase()
  } else if (isDescribe) {
    return event.Reservations?.[0]?.Instances?.[0].State?.Name.toUpperCase()
  } else {
    throw new Error(`Unknown Event: [${JSON.stringify(event)}]`)
  }
}

exports.normalizeEvent = normalizeEvent

exports.handler = async (event) => {
  try {
    const trigger = normalizeEvent(event)
    const res = KEYWORD_COMMANDS[trigger](event)
    return {
      status: 200,
      body: res,
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500,
      error: err.message,
    }
  }
}
