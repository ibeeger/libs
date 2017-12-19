/*
* @Author: ibeeger
* @Date:   2017-12-15 17:32:15
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-12-18 11:22:45
*/

'use strict';

global.projectName = "hello NODE";

const It = require("./test.js");
 console.log("当前内存使用:" + (process.memoryUsage()["heapUsed"] / 1024 / 1024).toFixed(2) + 'MB');

setInterval(function(){
	for(let i=0;i<1000; i++){
		global.projectName+=","+Date.now()*500000;
	};
	
	process.stdout.write('\x1Bc');
    process.stdout.write("当前内存使用:" + (process.memoryUsage()["heapUsed"] / 1024 / 1024).toFixed(2) + 'MB\n');
    console.log(global.projectName.length)

},100)
