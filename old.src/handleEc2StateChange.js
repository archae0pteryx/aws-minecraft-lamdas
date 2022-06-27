const { INSTANCE_ID } = process.env

async function handleEc2StateChange(ec2) {
  console.log(`HANDLE CHANGE NOTIFICATION`)
}

exports.handleEc2StateChange = handleEc2StateChange
