 

'use strict';

var client = require("./clien_post.js");
 
function getData() {
	client.post("teacher.huitong.com",{},"/api/web/v300/fetch/teacherInfo", function(data) {
		 console.log(data)
	});
}
var url = "/api/web/v320/task/exercise/cart/exercise/add"
function getData1() {
        client.post("local.huitong.com",{},"/api/fetch/exercise?knowledgeId=10238102", function(data) {
		 // console.log(data)
	});
}
function getData2() {
	client.post("web.teacher.willclass.com",{},"/api/web/v300/fetch/book/chapter", function(data) {
		 console.log(data)
	});
}



function getData3() {
	client.post("t.willclass.com",{},"/api/web/v300/fetch/teacherInfo", function(data) {
		 console.log(data)
	});
}
 
for(var i=0; i<10; i++){
	// getData();
	getData();
	console.log(i)
}
