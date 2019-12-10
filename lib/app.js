const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { method, path, body } = parseRequest(data.toString());

    if(method === 'GET' && path === '/green') {
      socket.end(createResponse({ 
        body: 'Yeehaa!',
        status: '200',
        contentType: 'text/plain'
      }));
    } 
    else if(method === 'GET' && path === '/red') {
      socket.end(createResponse({
        body: 'Wahoo!',
        status: '200',
        contentType: 'text/plain'
      }));
    } 
    else if(method === 'GET' && path === '/blue') {
      socket.end(createResponse({
        body: 'Nice!',
        status: '200',
        contentType: 'text/plain'
      }));
    }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
