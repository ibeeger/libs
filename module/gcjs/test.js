/*
* @Author: ibeeger
* @Date:   2017-07-25 14:22:19
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-25 14:41:06
*/

'use strict';

const arr = []
function pushString(){
	let i=0;
	while(i<5000){
		// arr.push("item"+Math.random());
		i++;
	};
	// console.log(arr.length);
	console.log("当前内存使用:" + (process.memoryUsage()["heapUsed"] / 1024 / 1024).toFixed(2) + 'MB');
}

setInterval(pushString,1000);
setInterval(function(){
	// arr=[];
	arr.splice(0,arr.length);
},30000)