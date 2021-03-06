'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected ', socket.id);

  // socket.on('speak', (payload) => {
  //   console.log(payload);
  //   console.log('.');
  //   socket.broadcast.emit('message', payload);
  // });

  socket.on('file-save', (payload) => {
    console.log(payload);
    console.log('.');
    socket.broadcast.emit('file-save', payload);
  });

  socket.on('file-error', (payload) => {
    console.log(payload);
    console.log('.');
    socket.broadcast.emit('file-error', payload);
  });

});



