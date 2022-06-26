const MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT = {
  version: '0',
  id: 'ea0f67c1-3c7a-d4f0-a45b-a716c188f179',
  'detail-type': 'EC2 Instance State-change Notification',
  source: 'aws.ec2',
  account: '259562322670',
  time: '2022-06-26T20:39:35Z',
  region: 'us-west-2',
  resources: [
    'arn:aws:ec2:us-west-2:259562322670:instance/i-0f6488be699b82289',
  ],
  detail: {
    'instance-id': 'i-0f6488be699b82289',
    state: 'running',
  },
}

module.exports = { MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT }
