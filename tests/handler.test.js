const { handleEc2Start } = require('../old.src/handleEc2Start')
const { handleEc2StateChange } = require('../old.src/handleEc2StateChange')
const { handler, normalizeEvent } = require('../old.src/index')
const { MOCK_DESCRIBE_EVENT } = require('./fixtures/mockDescribeEvent')
const { MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT } = require('./fixtures/mockEventbridgeEvent')
const { MOCK_PINPOINT_EVENT } = require('./fixtures/mockPinpointEvent')

const AWS = require('aws-sdk')

jest.mock('aws-sdk', () => ({
  EC2: jest.fn()
}))

jest.mock('../src/handleEc2Start', () => ({
  handleEc2Start: jest.fn(),
}))

jest.mock('../src/handleEc2StateChange', () => ({
  handleEc2StateChange: jest.fn(),
}))

let mockEc2;

describe('root lamda handler', () => {
  beforeEach(() => {
    mockEc2 = new AWS.EC2()
  })
  it('calls pinpoint start handler', async () => {
    await handler(MOCK_PINPOINT_EVENT)
    expect(handleEc2Start).toHaveBeenCalledTimes(1)
  })

  it('calls the state change handler', async () => {
    await handler(MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT)
    expect(handleEc2StateChange).toHaveBeenCalledTimes(1)
  })

  it('normalizes the events', () => {
    const pinpoint = normalizeEvent(MOCK_PINPOINT_EVENT)
    expect(pinpoint).toBe('SERVER START')
    const describe = normalizeEvent(MOCK_DESCRIBE_EVENT)
    expect(describe).toBe('RUNNING')
    const stateChange = normalizeEvent(MOCK_EVENTBRIDGE_STATE_CHANGE_EVENT)
    expect(stateChange).toBe('RUNNING')
  })
})
