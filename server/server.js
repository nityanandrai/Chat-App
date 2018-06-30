const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('Connection accepted from client');

  socket.emit('newMessage', {
    from: 'diff amp',
    text: 'could not make it',
    createAt: 2342
  });

  socket.on('createMessage', (message) => {
    console.log('Message created by clinet arrived ', message);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from client');
  });
});

server.listen(port, ()=> {
  console.log('Server is up and running at port ', port);
});