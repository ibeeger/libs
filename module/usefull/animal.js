/*
 * @Author: ibeeger
 * @Date:   2017-01-04 16:54:14
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-05 11:44:20
 */

'use strict';

var names = require("./animalname.js");
var assert = require("assert");
const URL = require('url');
var jsdom = require("jsdom");
const exec = require('child_process').exec;
const pinyin = require("pinyin");
var num = 0;

const fs = require("fs");

// var dbconf = require("./dbconfig.js");
// var MongoClient = require('mongodb').MongoClient,
// 	db;
// var addr = dbconf.db;

// MongoClient.connect(addr, function(err, sdb) {
// 	assert.equal(err, null);
// 	db = sdb.collection("anims");

// })

var mammals = [];
var jsonfilename = 'insect';

var anims = names[jsonfilename];

var obj = {};
var url = "http://www.aidongwu.net/dongwu/";
var newurl = "http://www.aidongwu.net/dongwu/"
Object.defineProperty(obj, "url", {
	set: function(name) {
		url = newurl + encodeURI(name);
	
		let options = {
			url: url,
			userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36",
			scripts: ["http://local.testb.huitong.com/javascripts/jquery.js"],
			done: function(err, window) {
				var $ = window.$;
				console.log("===============================================================================");
				console.log(name);
				let index = $(".tag-animal>.keshu").index();
				let img = $(".tag-img").attr("src"); //图片地址
				let fileType = img ? img.split("/")[img.split("/").length - 1].split(".")[1].slice(0, 3) : ""; //图片后缀名
				let englistName = $(".tag-animal>.keshu>dl").length > 1 ? $(".tag-animal>.keshu>dl:eq(1)").find(":last-child").text().replace(/([^a-zA-Z]*)/g,"").toLocaleLowerCase() : "";
				let pname = pinyin(name).join("").toLocaleLowerCase();
				 

				let filename = englistName || pinyin(name,{style:0}).join("").toLocaleLowerCase(); 
				let desc = ""; //描述
				for (var i = 0; i < index; i++) {
					if ($(".tag-animal>p").eq(i).text()) {

						if (i == 1) {
							desc += $(".tag-animal>p").eq(i).text();
						} else {
							desc += "\n" + $(".tag-animal>p").eq(i).text();
						}


					}
				};
				console.log(num + "/" + anims.length);
				// console.log("名称" + name);
				// console.log("英文名" + englistName);
				// console.log("图片类型" + fileType)
				// console.log("描述:" + desc);
				// console.log("图片地址:" + img);

				let anim = {
					name: name,
					ename: englistName,
					pinyin:pname,
					desc: desc,
					img: fileType ?  (filename + "." + fileType) : ""
				};

				mammals.push(anim);
				// db.insert(anim, function(err) {
				// 	if (err) {
				// 		process.exit(0)
				// 	}
				// 	console.log("数据储存" + err);
				// })

				if (img) {
					exec("wget " + img + " -O " + __dirname + "/anims/"+jsonfilename+"/" + filename + "." + fileType, function() {
						if (arguments[0]) {
							console.log(arguments[0]);
							console.log("下载到：" + num)
							process.exit(0);
						}
					})
				};
				setTimeout(function() {
					num++;
					if (num == anims.length) {
						fs.open(__dirname + "/anims/"+jsonfilename+".json", 'w+', function(err) {
							console.log(err);
							fs.writeFileSync(__dirname + "/anims/"+jsonfilename+".json", JSON.stringify(mammals));
							process.exit(0)
						});

					}
					do {
						obj.url = anims[num];
					} while (num > anims.length)
				}, 2000)


			}
		};
		jsdom.env(options);

	},
	get: function() {
		return url
	},
	enumerable: true,
	configurable: true
});

obj.url = anims[num];