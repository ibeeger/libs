/*
* @Author: ibeeger
* @Date:   2017-07-13 20:12:08
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-14 14:05:25
*/

'use strict';


var i = 0; 
var p =1;
setInterval(function(){
	i=(i+parseInt(p));
	process.stdout.write(i+"");
},3000);
process.stdin.setEncoding('utf8');
process.stdin.on("data",function(chunk){
	p = chunk;
})