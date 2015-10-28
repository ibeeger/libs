/* 
 * @Author: willclass
 * @Date:   2015-10-28 15:01:02
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-10-28 15:56:38
 */

'use strict';

var client = require("../dist/http_client.js");
var dbconf = require("./dbconfig.js");
var assert = require("assert");
var MongoClient = require('mongodb').MongoClient,
	db;

var url = dbconf.db1;


client.setHost("local.huitong.com");
// client.setCookie("HT01", "N2t6dkc5elFycWdGWHp2SU81MzQ3Zz09|11");//语文
client.setCookie("HT01", "aURuSGpsaWxhY1lGWHp2SU81MzQ3Zz09|11");//数学
// client.setCookie("HT01", "U3Jid3dDUUE1NXdGWHp2SU81MzQ3Zz09|11");//英语


function getData() {
	client.post("/teacher/api/exercise/fetchKnowledgeTree", {}, function(data) {
		var _data = JSON.parse(data);
		var insertdata = JSON.stringify(_data.data);
		
		var col = db.collection("SubjectMathematics");
		col.insertMany(_data.data,function(){
			console.log(arguments);
			process.exit();
		})
	});
}



MongoClient.connect(url, function(err, sdb) {
	assert.equal(err, null);

	db = sdb;


	getData();
})