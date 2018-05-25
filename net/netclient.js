/*
* @Author: ibeeger
* @Date:   2018-02-26 10:28:00
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-02-26 10:46:11
*/

'use strict';

const net = require("net");
const path = require("path");


const client = new net.Socket();

client.connect({
	port:53755
},function(){
	console.log(arguments);
	client.write("hello","utf8",function(){
		console.log(arguments);
	})
});

