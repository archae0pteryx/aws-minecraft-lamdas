exports.handler = async (event) => {
  const state = event.detail.state
  // const res = await
  const response = {
    statusCode: 200,
    body: JSON.stringify(res),
  }
  return response
}
