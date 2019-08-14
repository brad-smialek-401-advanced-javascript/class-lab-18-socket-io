'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const faker = require('faker');
const util = require('util');
const fs = require('fs');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
}, 1000);

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const loadFile = (file) => readFile(file);
const saveFile = (file, buffer) => writeFile(file, buffer);
const convertBuffer = buffer => Buffer.from(buffer.toString().trim().toLowerCase());

/**
 *
 *
 * @param {*} file
 * @returns
 */
const alterFile = (file) => {
  return loadFile(file)
  .then(contents => convertBuffer(contents))
  .then(buffer => saveFile(file, buffer))
  .then( () => socket.write(`save ${file}`) && socket.end())
  .catch( error => socket.write(`${error}`) && socket.end())
};

let file = process.argv.slice(2).shift();
alterFile(file);
