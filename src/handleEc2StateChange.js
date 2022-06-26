const { INSTANCE_ID } = process.env

async function handleEc2StateChange(ec2, event) {
  console.log(`[+] State change triggered for ${INSTANCE_ID}`)
  console.log(JSON.stringify(event))
}

module.exports = { handleEc2StateChange }
