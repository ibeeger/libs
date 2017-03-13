/*
* @Author: ibeeger
* @Date:   2017-01-19 16:45:25
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-19 18:59:16
*/

'use strict';
var client = require("../dist/http_client.js")
console.log(client);
 

client.setHost("student.willclass.com");
client.setMethod("post");
// client.setType("multipart/form-data");

var token = "NWxpQzBrOTZBWEVGWHp2SU81MzQ3Zz09";

var loginurl = "/api/wireless/v200/user/student/login";
var login = {
	loginAccount:"18500040388",
	loginPassword:"123456"
}


var errurl = "/api/wireless/v300/student/fetch/colligation/exam/list";
var errjson={
	type:0,
	subjectCode:1
}

client.post(errurl+"?token="+token,errjson,function(){
	console.log(arguments)
})

