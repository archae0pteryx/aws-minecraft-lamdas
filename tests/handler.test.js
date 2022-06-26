const { handler } = require('../src/index')

const mockEvent = {}

describe('root lamda handler', () => {
  it('tests', async () => {
    const actual = await handler(mockEvent)
    expect(actual).toBeTruthy()
  })
})
