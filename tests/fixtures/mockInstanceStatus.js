const MOCK_INSTANCE_STATUS = {
  InstanceStatuses: [
    {
      AvailabilityZone: 'us-west-2c',
      InstanceId: 'i-0f6488be699b82289',
      InstanceState: {
        Code: 16,
        Name: 'running',
      },
      InstanceStatus: {
        Details: [
          {
            Name: 'reachability',
            Status: 'passed',
          },
        ],
        Status: 'ok',
      },
      SystemStatus: {
        Details: [
          {
            Name: 'reachability',
            Status: 'passed',
          },
        ],
        Status: 'ok',
      },
    },
  ],
}

module.exports = {
  MOCK_INSTANCE_STATUS
}
