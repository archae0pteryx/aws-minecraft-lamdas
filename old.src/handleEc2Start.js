const { INSTANCE_ID } = process.env

async function handleEc2Start(ec2) {
  return ec2.startInstances({
    InstanceIds: [INSTANCE_ID],
  })
}

exports.handleEc2Start = handleEc2Start
