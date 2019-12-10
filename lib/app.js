const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const createHtml = require('./utils/createHtml');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { method, path, body } = parseRequest(data.toString());

    if(method === 'GET' && path === '/green') {
      const body = createHtml('green');
      socket.end(createResponse({ 
        body: body,
        status: '200',
        contentType: 'text/html'
      }));
    } 
    else if(method === 'GET' && path === '/red') {
      const body = createHtml('red');
      socket.end(createResponse({
        body: body,
        status: '200',
        contentType: 'text/html'
      }));
    } 
    else if(method === 'GET' && path === '/blue') {
      const body = createHtml('blue');
      socket.end(createResponse({
        body: body,
        status: '200',
        contentType: 'text/html'
      }));
    }
    else if(method === 'GET' && path === '/') {
      socket.end(createResponse({
        body: 'hi',
        status: '200',
        contentType: 'text/plain'
      }));
    }
    else if(method === 'POST' && path === '/echo') {
      socket.end(createResponse({
        body: body,
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
