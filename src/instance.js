async function currentInstanceState(ec2) {
  const data = await ec2.describeInstanceStatus({
    InstanceIds: [process.env.INSTANCE_ID],
  })
  return data.InstanceStatuses[0].InstanceState.Name.toUpperCase()
}

exports.currentInstanceState = currentInstanceState
