/*
 * @Author: ibeeger
 * @Date:   2017-01-19 16:45:25
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-09-15 16:39:35
 */

'use strict';
var client = require("../dist/http_client_mobile.js")
client.setHost("student.willclass.com");
client.setMethod("post");
// client.setType("multipart/form-data");

var token = "NWxpQzBrOTZBWEVGWHp2SU81MzQ3Zz09";

var loginurl = "/api/wireless/v200/user/student/login";
var login = {
	loginAccount: "18600450902",
	loginPassword: "123456"
}


var errurl = "/api/wireless/v300/student/fetch/colligation/exam/list";

var errjson = {
	type: 0,
	subjectCode: 1
}

var durl = "/api/wireless/v320/fetch/allMaterialAndBook"; //获取书本
var djson = {
	subjectCode: 2
}


var curl = "/api/wireless/v320/fetch/province/knowlege" //获取知识点根据省份
var cjson = {
	provinceId: 100001,
	subjectCode: 2
};

var eurl = "/api/wireless/v100/task/practice/easy/create";
var ejson = {
	subjectCode: 2
}

var furl = "/api/wireless/v100/task/practice/create";
var fjson = {
	subjectCode: 2,
	size: 30,
	chapterId: 10002985
}

var uurl = "/api/wireless/v200/user/fetch/info";
var ujson = {}


var editurl = "/api/wireless/v200/user/finishInfo";
var editjson = {
	schoolId: 1000001,
	classNumber: 1,
	enterSchoolYear: 2016,
	majorCode: 1
}

var examurl = "/api/wireless/v350/student/fetch/specialExam";
var examJson = {
	type: 1,
	subjectCode: 1,
	gradeCod: 10,
	knowledgeIds: [10238273]
}


var createExerciseUrl = "/api/wireless/v340/student/target/practice/create";
var createExerciseJson = {
	subjectCode: 1,
	size: 14,
	knowledgeId: 10238273
}


const Oit = require("./set.js");

var schoolid = 18600450902;

const pattern = {
	set: function(obj) {
		client.post(obj.url + "?token=" + token, obj.json, function(data) {
			console.log(data.status);
			schoolid++;
			let json = {
				loginAccount: schoolid,
				loginPassword: "123456"
			}
			One.url = {
				url: loginurl,
				json: json
			}
		})
	}
}

const One = new Oit(pattern);

One.url = {
	url: loginurl,
	json: login
}

// for(var i=0; i<500; i++)
// {
// client.post(editurl+"?token="+token,editjson,function(data){
// 	console.dir(data)
// })

// }