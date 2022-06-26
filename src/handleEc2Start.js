const { INSTANCE_ID } = process.env

async function handleEc2Start(ec2, event) {
  console.log(`[+] Start triggered for ${INSTANCE_ID}`)
  console.log(JSON.stringify(event))
}

module.exports = { handleEc2Start }



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
