'use strict';

// CLIENT listening for emit file-save and file-error
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


socket.on('message', (payload) => {
  console.log('heard', payload);
});

socket.on('file-save', function(data) {
  
  console.log(`you saved : ${data}`);
});

socket.on('file-error', function() {
  console.log('Things are broke... error')
});

