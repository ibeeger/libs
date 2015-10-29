/* 
 * @Author: willclass
 * @Date:   2015-10-29 14:50:43
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-10-29 18:07:51
 */

'use strict';

var client = require("../dist/http_client.js");
var dbconf = require("./dbconfig.js");
var assert = require("assert");
var jsdom = require("jsdom");

var MongoClient = require('mongodb').MongoClient,
	db;

// http://www.tizi.com/teacher/paper/question/13 高中物理
// http://www.tizi.com/teacher/paper/question/14 高中化学
// http://www.tizi.com/teacher/paper/question/15 高中生物
// http://www.tizi.com/teacher/paper/question/16 高中政治
// http://www.tizi.com/teacher/paper/question/17 高中历史
// http://www.tizi.com/teacher/paper/question/18 高中地理

var url = dbconf.db1;

MongoClient.connect(url, function(err, sdb) {
	assert.equal(err, null);
	db = sdb;
	jsdom.env(options)
})

var options ={
	url: "http://www.tizi.com/teacher/paper/question/16",
	scripts: ["http://ajax.useso.com/ajax/libs/jquery/1.7.2/jquery.min.js?ver=3.4.2"],
	done: function(err, window) {


		var $ = window.$;

		var json = [],
			json1, json2, json3, json4;


			console.log($(".tree-list li").length);



		$(".tree-list li").each(function(i, html) {
			var j = {};
			var itemclass = $(html).find("div");

			j.id = itemclass.find("a").eq(1).attr("data-nselect");
			j.name = itemclass.find("a").eq(1).attr("title");

			if (itemclass.hasClass("tree-title2")) {
				json1 = {};
				json1.subKnowledges = new Array();
				json1.id = j.id;
				json1.name = j.name;
				json1.fatherId = 0;
				json.push(json1);
			};
			if (itemclass.hasClass("tree-title3")) {
				json2 = {}
				json2.subKnowledges = new Array();
				json2.id = j.id;
				json2.name = j.name;
				json2.fatherId = json1.id;
				// console.log("json2 . fid="+json1.id);
				json1.subKnowledges.push(json2);
			};
			if (itemclass.hasClass("tree-title4")) {
				json3 = {}
				json3.subKnowledges = new Array();
				json3.id = j.id;
				json3.name = j.name;
				json3.fatherId = json2.id;
				json2.subKnowledges.push(json3);
			};

			if (itemclass.hasClass("tree-title5")) {
				json4 = {}
				json4.id = j.id;
				json4.name = j.name;
				json4.fatherId = json3.id;
				json3.subKnowledges.push(json4);
			};

		});

	
		var col = db.collection("TiziZ");
		col.insertMany(json,function(){
			console.log(arguments);
			process.exit();
		})

	}
}

