/*
* @Author: ibeeger
* @Date:   2017-01-19 16:45:25
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-06-28 13:27:57
*/

'use strict';
var client = require("../dist/http_client.js")
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

var durl = "/api/wireless/v320/fetch/allMaterialAndBook";//获取书本
var djson = {
	subjectCode:2
}


var curl = "/api/wireless/v320/fetch/province/knowlege"//获取知识点根据省份
var cjson = {
	provinceId:100001,
	subjectCode:2
};

var eurl = "/api/wireless/v100/task/practice/easy/create";
var ejson = {
	subjectCode:2
}

var furl = "/api/wireless/v100/task/practice/create";
var fjson = {
	subjectCode:2,
	size:30,
	chapterId:10002985 
}



const Oit = require("./set.js");


const pattern = {
 	set:function(obj){
 	// 	client.post(obj.url+"?token="+token,obj.json,function(data){
 	// 		console.log(JSON.parse(data)["msg"]);
		// 	One.url = {
		// 		url:furl,
		// 		json:{
		// 			subjectCode:2,
		// 			size:30,
		// 			chapterId:obj.json["chapterId"]+1
		// 		}
		// 	}
		// })
 	}
 }

const One = new Oit(pattern);

One.url = {
	url : furl,
	json:fjson
}

for(var i=0; i<500; i++)
{
	client.post(furl+"?token="+token,fjson,function(data){
		console.dir(data)
	})

}