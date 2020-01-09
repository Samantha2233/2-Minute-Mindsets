
exports.handler = function (event, context, callback) {
  console.log('Does serve function work?');

  console.log('EVENT:', event);
  console.log('CONTEXT:', context);

  // if (event.httpMethod === 'POST' && event.path === )

  callback(null, {
    statusCode: 200,
    body: 'Hello?'
  })
}