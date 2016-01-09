/* 
 * @Author: willclass
 * @Date:   2015-10-29 14:50:43
 * @Last Modified by:   willclass
 * @Last Modified time: 2016-01-09 17:16:22
 */

'use strict';

var client = require("../dist/http_client.js");
// var dbconf = require("./dbconfig.js");
var assert = require("assert");
var jsdom = require("jsdom");

var arg = process.argv;

var isg = arg[2];
var sub = arg[3];
var id = arg[4];

var MongoClient = require('mongodb').MongoClient,
	db;

// http://www.tizi.com/teacher/paper/question/13 高中物理
// http://www.tizi.com/teacher/paper/question/14 高中化学
// http://www.tizi.com/teacher/paper/question/15 高中生物
// http://www.tizi.com/teacher/paper/question/16 高中政治
// http://www.tizi.com/teacher/paper/question/17 高中历史
// http://www.tizi.com/teacher/paper/question/18 高中地理


var url = "mongodb://learn:learn123@115.28.35.15:9000/learn";

MongoClient.connect(url, function(err, sdb) {
	assert.equal(err, null);
	db = sdb;
	jsdom.env(options)
})


var options ={
	url: "http://www.dezhi.com/knowledge/subject_"+id,
	scripts: ["http://ajax.useso.com/ajax/libs/jquery/1.7.2/jquery.min.js?ver=3.4.2"],
	done: function(err, window) {


		var $ = window.$;

		var json = [];


			console.log($(".dz_ceshi_nav li").length);



		$(".dz_ceshi_nav>li").each(function(i, html) {
			var j = {};
			var item_titile = $(html).find("div a").html();
			var er_list = $(html).find(".ul3 li");
			
			j.id = $(html).attr("id").replace("t_","");
			j.name = item_titile;
			j.subKnowledges = new Array();

			er_list.each(function(i,_html){
				j.subKnowledges.push(
						{
							id:$(_html).attr("id").replace("t_",""),
							name:$(_html).find("a").html()
						}
					)
			})

			 json.push(j);

		});
	
		var col = db.collection("Dezhi_"+isg+"_"+sub);
		console.log(json)
		col.insertMany(json,function(err,rst){
			console.log(arguments);
			process.exit();
		})

	}
}



