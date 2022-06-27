const { currentInstanceState } = require('./instance')

const { INSTANCE_ID } = process.env

async function handleEc2Restart(ec2) {
  const currentState = await currentInstanceState(ec2)
  if (currentState === 'RUNNING') {
    await ec2.rebootInstances({
      InstanceIds: [process.env.INSTANCE_ID],
    })
    console.log(`[+] Restarting [${INSTANCE_ID}]`)
    return
  }
  console.log(`[+] Restart ignored. Server isn't up.`)
}

exports.handleEc2Restart = handleEc2Restart
