const { handleEc2Restart } = require('./handleEc2Restart')
const { handleEc2Start } = require('./handleEc2Start')
const { handleEc2StateChange } = require('./handleEc2StateChange')
const { handleEc2Stop } = require('./handleEc2Stop')
const { handleScheduledCheck } = require('./handleEc2UptimeCheck')
const AWS = require('aws-sdk')

const ec2 = new AWS.EC2()

const KEYWORD_COMMANDS = {
  'SERVER START': handleEc2Start,
  'SERVER STOP': handleEc2Stop,
  'SERVER RESTART': handleEc2Restart,
  'STATE RUNNING': handleEc2StateChange,
  'STATE STOPPED': handleEc2StateChange,
  'CHECK UPTIME': handleScheduledCheck,
}

const SCHEDULED_CHECK_EVENT_RULE = 'arn:aws:events:us-west-2:259562322670:rule/every-20-min'

function normalizeEvent(event) {
  const isPinpointCommand = event.Records && event.Records.length !== 0
  const isStateChangeEvent = event.source === 'aws.ec2'
  const isScheduledCheck =
    event.source === 'aws.events' &&
    event.resources?.[0] === SCHEDULED_CHECK_EVENT_RULE
  const isDescribe = event.Reservations?.[0]?.Instances?.[0].State.Name

  if (isPinpointCommand) {
    const message = JSON.parse(event.Records[0].Sns.Message)
    return message.messageBody
  } else if (isStateChangeEvent) {
    const stateType = event.detail.state.toUpperCase()
    return `STATE ${stateType}`
  } else if (isDescribe) {
    return event.Reservations?.[0]?.Instances?.[0].State?.Name.toUpperCase()
  } else if (isScheduledCheck) {
    return 'CHECK UPTIME'
  } else {
    throw new Error(`Unknown Event: [${JSON.stringify(event)}]`)
  }
}

exports.normalizeEvent = normalizeEvent

exports.handler = async (event) => {
  try {
    // console.log(`DEBUG: ${JSON.stringify(event)}`)
    const trigger = normalizeEvent(event)
    const res = KEYWORD_COMMANDS[trigger](ec2, event)
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
