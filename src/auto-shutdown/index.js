const { ec2Instance } = require('ec2Commands')
const { hasOnlinePlayer } = require('./hasOnlinePlayer')
const { SHUTDOWN_AFTER_MINS } = process.env

function _hasTimeExpired(launchTime) {
  const now = Date.now()
  const serverUpForMins = Math.floor((now - launchTime) / 1000 / 60)
  return serverUpForMins >= SHUTDOWN_AFTER_MINS
}

async function _shouldServerShutdown(launchTime) {
  const isStopped = await ec2Instance('isStopped')
  console.log(isStopped)
  if (isStopped) {
    return false
  }
  const playersOnline = await hasOnlinePlayer()
  return _hasTimeExpired(launchTime) && !playersOnline
}

exports.handler = async (event) => {
  try {
    const instance = await ec2Instance()
    if (!instance) {
      throw new Error('Autoshutdown cant find instance')
    }
    const launchTime = Date.parse(instance.LaunchTime)
    const shouldShutdown = _shouldServerShutdown(launchTime)
    if (shouldShutdown) {
      const res = await ec2Instance('stop')
      return {
        statusCode: 200,
        body: res,
      }
    }
    return {
      statusCode: 200,
      body: 'shutdown check',
    }
  } catch (e) {
    console.error(e.message)
    return {
      statusCode: 500,
      body: e.message || 'unknown error',
    }
  }
}
