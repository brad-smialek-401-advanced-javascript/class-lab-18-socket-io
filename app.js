'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const faker = require('faker');
const {loadFile, saveFile, convertBuffer} = require('./read-write-upper');

//emits speak sends hacker as payload   where server is listening for speak
setInterval( () => {
  socket.emit('speak', faker.hacker.phrase()); 
}, 1000);



/**
 *recieves file and passes to methods to convert and write to test file
 *
 * @param {*} file
 * @returns {}
 */
const alterFile = (file) => {
  if (!file) {console.log('no text file')};
  return loadFile(file)
  .then(contents => convertBuffer(contents))
  .then(buffer => {
    return saveFile(file, buffer);
  })
  .then( () => socket.emit('file-save', file ))
  .catch( err => socket.emit('file-error', err.message));
};

let file = process.argv.slice(2).shift();
alterFile(file);
