/* 
 * @Author: willclass
 * @Date:   2015-10-12 09:44:35
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-10-28 11:09:55
 */

'use strict';

var http = require("http");
var fs = require("fs");
var post = require("./clien_post.js");
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

var db;

// Connection URL
var url = 'mongodb://learn:learn123@localhost:9000/learn';

 
// console.log(mong);
// /teacher/api/exercise/fetchKnowledgeTree 获取知识点
// /student/api/user/login
// http://local.huitong.com/teacher/api/group/fetchLoadStudentToGroup  "groupId": "37", "studentNames": ["老师1","老师2","老师3","老师4","老师5","老师6","老师7","老师8"]
// http://local.huitong.com/teacher/api/user/modifyInfo
function getData(callback) {


	post.post("local.huitong.com", {
			groupId: "37",
			studentNames: ["老师1", "老师2", "老师3", "老师4", "老师5", "老师6", "老师7", "老师8"]
		},
		"/teacher/api/group/fetchLoadStudentToGroup",
		function(data) {
			console.log(data);
		})


}


getData();

// MongoClient.connect(url,function(err,sdb){
// 	assert.equal(err, null);

// 	// console.log(sdb);
// 	db = sdb;

// 	getData();

// })