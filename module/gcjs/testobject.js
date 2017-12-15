/*
* @Author: ibeeger
* @Date:   2017-07-25 14:22:19
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-25 16:13:44
*/

'use strict';

const arr = {};
const bf = Buffer();
function pushString(){
	let i=0;
	while(i<10){
		// arr["item"+Date.now()]=Math.random();
		bf.concat(new Buffer("item"+Date.now()));
		i++;
	};
	console.log("当前内存使用:" + (process.memoryUsage()["heapUsed"] / 1024 / 1024).toFixed(2) + 'MB===='+Object.keys(arr).length);
}

pushString();
var m = setInterval(pushString,10);
setInterval(function(){
	clearInterval(m);
	// for(var j in arr){
	// 	delete arr[j];
	// }
	m=setInterval(pushString,10);
},10000);