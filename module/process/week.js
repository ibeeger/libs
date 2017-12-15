/*
 * @Author: ibeeger
 * @Date:   2017-07-14 20:01:54
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-07-14 20:47:01
 */

'use strict';

var cs = require("cluster");
var clth = require('os').cpus().length;
// var init = require("./time.js");

var child = require("child_process");

var i = 0;



// cs.on('online', function(worker) {
// 	console.log('Worker ' + worker.process.pid + ' is online.');
// });



// if (cs.isMaster) {
	var arr = []
	for (var j = 0; j < clth; j++) {
		arr.push(child.fork("./time.js"));
	}
// }else{
	// init.init();
// }


for(var i=0; i<arr.length; i++){
	arr[i].on("message", function(work, data) {
		console.log(process.pid);
		console.log(data);
	});
}


