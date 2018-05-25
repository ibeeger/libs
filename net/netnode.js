/*
* @Author: ibeeger
* @Date:   2018-02-26 10:28:00
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-02-26 10:45:56
*/

'use strict';

const net = require("net");
const path = require("path");

const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on("connection",function(ws){
	ws.on("data",()=>{
		console.log(arguments)
	})
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});