

# LAB - 18

## Socket-io

### Author: Brad Smialek

### Links and Resources
* [submission PR](https://github.com/brad-smialek-401-advanced-javascript/lab-class-17-tcp-server/blob/master/README.md)
* [travis]([![Build Status](https://www.travis-ci.com/brad-smialek-401-advanced-javascript/lab-class-17-tcp-server.svg?branch=master)](https://www.travis-ci.com/brad-smialek-401-advanced-javascript/lab-class-17-tcp-server))

#### Documentation

* [jsdoc](http://xyz.com) 

### Modules
#### `app.js`
#### `server.js`
#### `logger.js`
#### `test.txt`

* `alterFile = (file) =>`
  *
* `dispatchEvent = (buffer) =>`
  *


###  Server Setup
* `PORT` - 3001 server.js


#### Running the app
* `node server.js` 
  * spins up local server // First
* `node logger.js` 
  * spins up logger // second
* `node app.js ./files/test.txt`
  * tells app to run and passes file 
* `save hello`
  * tests if server listening for save command

  
#### Tests
*  npm test in the terminal using jest


#### UML
![uml](./assets/tcp.jpg)
