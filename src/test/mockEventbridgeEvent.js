const MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT = {
  version: '0',
  id: 'ee376907-2647-4179-9203-343cfb3017a4',
  'detail-type': 'EC2 Instance State-change Notification',
  source: 'aws.ec2',
  account: '123456789012',
  time: '2015-11-11T21:30:34Z',
  region: 'us-east-1',
  resources: ['arn:aws:ec2:us-east-1:123456789012:instance/i-abcd1111'],
  detail: {
    'instance-id': 'i-abcd1111',
    state: 'running',
  },
}

module.exports = { MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT }
