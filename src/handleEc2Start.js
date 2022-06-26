const { INSTANCE_ID } = process.env

async function handleEc2Start(ec2) {
  return ec2.startInstance({
    InstanceIds: [INSTANCE_ID],
  })
}

exports.handleEc2Start = handleEc2Start
