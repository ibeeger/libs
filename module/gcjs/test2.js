/*
* @Author: ibeeger
* @Date:   2017-07-25 14:22:19
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-25 14:57:11
*/

'use strict';

const arr = []
function pushString(){
	let i=0;
	while(i<10){
		arr.push("item"+Math.random());
		i++;
	};
	console.log("当前内存使用:" + (process.memoryUsage()["heapUsed"] / 1024 / 1024).toFixed(2) + 'MB===='+arr.length);
}

pushString();
var m = setInterval(pushString,10);
setInterval(function(){
	clearInterval(m);
	arr.splice(0,arr.length);
	m=setInterval(pushString,10);
},10000)