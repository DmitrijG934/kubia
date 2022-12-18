const http = require('http')
const os = require('os')

console.log('Kubia server has started...')

var handler = (request, response) => {
    console.log(`Received request from ${request.connection.remoteAddress}`)
    response.writeHead(200)
    response.end(`You've hit ${os.hostname()}\n`)
}

http.createServer(handler).listen(8080)