/*
* @Author: ibeeger
* @Date:   2017-07-13 20:12:08
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-14 14:08:24
*/

'use strict';

const {spawn} = require("child_process");
 

const rst = spawn("node",["stdout.js"]);


rst.stdout.on("data",function(body){
	console.log(body.toString());
})

var i = 0;

setInterval(function(){
	i++;
	rst.stdin.write(i+"");
},1);