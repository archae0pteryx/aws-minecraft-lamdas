const { currentInstanceState } = require("./instance")

const { INSTANCE_ID } = process.env

async function handleEc2Stop(ec2) {
  const currentState = await currentInstanceState(ec2)
  if (currentState === 'RUNNING') {
    await ec2.stopInstances({
      InstanceIds: [INSTANCE_ID],
    })
    console.log(`[+] Stopping [${INSTANCE_ID}]`)
    return
  }
  console.log(`[+] Ignore stop command. Server not running`)
}
module.exports = { handleEc2Stop }
