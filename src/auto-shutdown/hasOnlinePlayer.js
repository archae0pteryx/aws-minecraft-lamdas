const { RCON } = require('RCON')
const rcon = new RCON()

const { RCON_HOST, RCON_PASSWORD } = process.env

exports.hasOnlinePlayer = async function () {
  try {
    await rcon.connect(RCON_HOST, 25575, RCON_PASSWORD)
    const data = await rcon.send('list')
    if (parseInt(data.split(' ')[2]) > 0) {
      rcon.end()
      return true
    }
    rcon.end()
    return false
  } catch (err) {
    console.error(err)
  }
}
