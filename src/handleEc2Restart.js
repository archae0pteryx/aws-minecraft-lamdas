const { INSTANCE_ID } = process.env

async function handleEc2Restart(ec2, event) {
  console.log(`[+] Restart triggered for ${INSTANCE_ID}`)
  console.log(JSON.stringify(event))
}

module.exports = { handleEc2Restart }
// const handleServerRestart = async () => {
//   const params = {
//     InstanceIds: [process.env.INSTANCE_ID],
//   }
//   await ec2.rebootInstances(params)
//   console.log(`[+] rebooting ${process.env.INSTANCE_ID}`)
// }
