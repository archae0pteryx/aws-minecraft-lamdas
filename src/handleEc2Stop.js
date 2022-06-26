const { INSTANCE_ID } = process.env

async function handleEc2Stop(ec2, event) {
  console.log(`[+] Stop triggered for ${INSTANCE_ID}`)
  console.log(JSON.stringify(event))
}
module.exports = { handleEc2Stop }

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
