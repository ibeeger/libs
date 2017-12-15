/*
* @Author: ibeeger
* @Date:   2017-07-07 17:14:32
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-07 19:59:08
*/

'use strict';

var child = require("child_process");

const test = child.spawn("node",["a.js"]);
test.ref();
test.stdout.on("data",function(str){
	console.log(":"+str)
});


setTimeout(function(){
	process.exit(0);
},5000)