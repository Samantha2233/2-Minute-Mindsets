console.log('Does serve function work?');

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello?'
  })
}