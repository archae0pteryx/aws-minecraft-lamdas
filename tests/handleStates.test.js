const { currentInstanceState } = require('../src/instance')
const { handleEc2Start } = require('../src/handleEc2Start')
const { handleEc2Stop } = require('../src/handleEc2Stop')
const { handleEc2Reset } = require('../src/handleEc2Restart')

const { MOCK_INSTANCE_STATUS } = require('./fixtures/mockInstanceStatus')
const AWS = require('aws-sdk')

jest.mock('aws-sdk', () => ({
  EC2: jest.fn(() => ({
    describeInstanceStatus: jest.fn(),
    startInstance: jest.fn(),
  })),
}))

let mockEc2 = jest.fn()

describe('states handlers', () => {
  beforeEach(() => {
    mockEc2 = new AWS.EC2()
  })
  it('gets instance state', async () => {
    mockEc2.describeInstanceStatus.mockResolvedValueOnce(MOCK_INSTANCE_STATUS)
    const actual = await currentInstanceState(mockEc2)
    expect(actual).toBe('RUNNING')
  })
  it('calls start trigger', async () => {
    await handleEc2Start(mockEc2)
    expect(mockEc2.startInstance).toHaveBeenCalledTimes(1)
  })

  it('calls stop trigger', async () => {
    
  })
})
