const { handleEc2Stop } = require('./handleEc2Stop')
const { LIFETIME_MINS } = process.env

async function handleScheduledCheck(ec2) {
  const now = Date.now()
  const data = await ec2.describeInstances(params)
  const instance = data.Reservations?.[0].Instances?.[0]
  const launchTime = Date.parse(instance.LaunchTime)
  const age = Math.floor((now - launchTime) / 1000 / 60)
  if (age >= LIFETIME_MINS) {
    await handleEc2Stop(ec2)
    return
  }
}

exports.handleScheduledCheck = handleScheduledCheck
