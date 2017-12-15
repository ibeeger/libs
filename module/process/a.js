/*
* @Author: ibeeger
* @Date:   2017-07-07 17:18:35
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-10 17:27:43
*/

'use strict';

const fs = require("fs");
var i = 0;
setInterval(function(){

	// fs.writeFileSync("a.txt","123",'utf8');
	// process.exit(0);

	// process.stdout.write(new Date().getTime()+"!");
	i++;
	console.log(new Date()+"-"+i);

},1)



process.on("exit",function(){
	console.log("字进程退出了");
})


// process.on('SIGINT', () => {
//   console.log("SIGINT");
// });


// process.on('SIGKILL', () => {
//   console.log("SIGKILL");
// });


// process.on('SIGSTOP', () => {
//   console.log("SIGSTOP");
// });

process.on('SIGHUP', () => {
  console.log("SIGHUP");
});

process.on('SIGBUS', () => {
  console.log("SIGBUS");
});
