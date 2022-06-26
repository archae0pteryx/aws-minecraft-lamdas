const AWS = require('aws-sdk')
const startHandler = require('./ec2-start')
const stopHandler = require('./ec2-stop')
const stateChangeHandler = require('./ec2-state')

const ec2 = new AWS.EC2()

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  }
  return response
}



// const handleServerRestart = async () => {
//   const params = {
//     InstanceIds: [process.env.INSTANCE_ID],
//   }
//   await ec2.rebootInstances(params)
//   console.log(`[+] rebooting ${process.env.INSTANCE_ID}`)
// }

// const handleServerStart = async () => {
//   const params = {
//     InstanceIds: [process.env.INSTANCE_ID],
//   }
//   const res = await ec2.startInstances(params).promise()
//   return {
//     statusCode: 200,
//     body: {
//       status: 200,
//       body: `[+] instance ${process.env.INSTANCE_ID} started`,
//       response: res,
//     },
//   }
// }

// const handleServerStop = async () => {
//   const params = {
//     InstanceIds: [process.env.INSTANCE_ID],
//   }
//   const data = await ec2.describeInstances(params).promise()
//   const instance = data.Reservations?.[0].Instances?.[0] || {}
//   console.log(`DEBUG: ${JSON.stringify(data)}`)
//   if (
//     instance?.State?.Name !== 'stopped' &&
//     shouldStopServer(instance.LaunchTime)
//   ) {
//     console.log(
//       `[+] stopping ${
//         process.env.INSTANCE_ID
//       } at ${Date.now().toLocaleString()}`
//     )
//     const res = await ec2.stopInstances(params).promise()
//     return {
//       statusCode: 200,
//       body: `stopped ${process.env.INSTANCE_ID}`,
//       response: res,
//     }
//   }
//   return {
//     statusCode: 200,
//     body: `[+] tried to stop: ${process.env.INSTANCE_ID} but it is not running`,
//   }
// }

// const shouldStopServer = (launchedAt) => {
//   const launchTime = new Date(launchedAt)
//   const now = new Date()
//   return (now - launchTime) / 3600000 > process.env.MAX_HOURS
// }

// const KEYWORD_COMMANDS = {
//   'SERVER START': handleServerStart,
//   'SERVER STOP': handleServerStop,
//   'SERVER RESTART': handleServerRestart,
// }

// exports.handler = async (event) => {
//   try {
//     const rawMessage = event.Records?.[0].Sns?.Message || ''
//     const command = JSON.parse(rawMessage)?.messageBody || ''
//     if (!rawMessage || !command) {
//       throw new Error(
//         `no command from trigger received ${JSON.stringify(event)}`
//       )
//     }

//     const res = await KEYWORD_COMMANDS[command]()
//     console.log(`[+] ran command [${command}] - [${JSON.stringify(res)}]`)
//     return res
//   } catch (error) {
//     console.error(error)
//     const response = {
//       statusCode: 500,
//       body: 'error during script',
//     }
//     return response
//   }
// }
