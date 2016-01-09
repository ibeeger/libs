/* 
 * @Author: willclass
 * @Date:   2015-10-28 15:01:02
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-10-29 10:10:16
 */

'use strict';

var client = require("../dist/http_client.js");
// var dbconf = require("./dbconfig.js");
var assert = require("assert");
var MongoClient = require('mongodb').MongoClient,
	db;

// var url = dbconf.db1;


client.setHost("web.willclass.com");
client.setCookie("HT01", "WFF1YVVmSC9SSkVGWHp2SU81MzQ3Zz09|11");//自己
// client.setCookie("HT01", "dEVPQjlGMWp0SFFGWHp2SU81MzQ3Zz09|11");//王月
// http://web.willclass.com/student/api/user/fetchInfo

function getData() {
	client.post("/student/api/user/fetchInfo", {}, function(data) {
		var _data = JSON.parse(data);
		 console.dir(_data)
	});
}

getData();

// MongoClient.connect(url, function(err, sdb) {
// 	assert.equal(err, null);

// 	db = sdb;


	
// })