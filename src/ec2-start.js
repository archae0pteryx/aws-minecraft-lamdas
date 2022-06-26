const { INSTANCE_ID } = process.env
module.exports = function (ec2, event) {
  console.log(`[+] Start triggered for ${INSTANCE_ID}`)
  console.log(JSON.stringify(event))
}
