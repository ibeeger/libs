/*
* @Author: ibeeger
* @Date:   2017-07-14 20:21:12
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-17 14:55:44
*/

'use strict';

function init (){
	setInterval(function() {
		console.log("ok");
		process.send({
			ok: "ok" + process.pid
		},function(){
			console.log(arguments);
		});
	}, 3000);
}
init();