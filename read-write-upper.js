'use strict';

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 *recieves file passes file to readfile
 *
 * @param {*} file
 */
const loadFile = (file) => readFile(file);


/**
 *recieves file and buffer 
 *
 * @param {*} file
 * @param {*} buffer
 * @returns {}
 */
const saveFile = (file, buffer) => {
  return writeFile(file, buffer);
}


/**
 *takes buffer and makes a string, trims white space, then uppercase the the string
 *
 * @param {*} buffer
 */
const convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());


module.exports = {loadFile, saveFile, convertBuffer};