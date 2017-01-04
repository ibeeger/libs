/*
 * @Author: ibeeger
 * @Date:   2017-01-04 16:54:14
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-01-04 20:38:03
 */

'use strict';

var names = require("./animalname.js");
var assert = require("assert");
const URL = require('url');
var jsdom = require("jsdom");
const exec = require('child_process').exec;
const pinyin = require("pinyin");
var num = 0;

var dbconf = require("./dbconfig.js");
var MongoClient = require('mongodb').MongoClient,
	db;
var addr = dbconf.db;

MongoClient.connect(addr, function(err, sdb) {
	assert.equal(err, null);
	db = sdb.collection("anims");
	obj.url = names[num];
})




var obj = {};
var url = "http://www.aidongwu.net/dongwu/";
var newurl = "http://www.aidongwu.net/dongwu/"
Object.defineProperty(obj, "url", {
	set: function(name) {
		url = newurl + encodeURI(name);
		console.log(url);
		let options = {
			url: url,
			userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36",
			scripts: ["http://libs.willclass.com/libs/jquery/1.11.1/jquery.min.js"],
			done: function(err, window) {
				var $ = window.$;
				console.log("===============================================================================");
				let index = $(".tag-animal>.keshu").index();
				let img = $(".tag-img").attr("src"); //图片地址
				let fileType = img.split("/")[img.split("/").length - 1].split(".")[1]; //图片后缀名
				console.log($(".tag-animal>.keshu>dl").length)
				let englistName = $(".tag-animal>.keshu>dl").length>1 ?  $(".tag-animal>.keshu>dl:eq(1)").find(":last-child").text().toLocaleLowerCase().split("；")[0].split("，")[0] : "";

				if (!englistName || !englistName.match(/[a-zA-Z]/g)) {
					englistName = pinyin(name, {
						style: pinyin.STYLE_NORMAL
					}).join("").toLocaleLowerCase();

				};

				let filename = englistName;
				let desc = ""; //描述
				for (var i = 0; i < index; i++) {
					if ($(".tag-animal>p").eq(i).text()) {
						desc += $(".tag-animal>p").eq(i).text() + "\n";
					}
				};
				console.log(num+"/"+names.length);
				console.log("名称" + name);
				console.log("英文名" + englistName);
				console.log("图片类型" + fileType)
				console.log("描述:" + desc);
				console.log("图片地址:" + img);

				let anim = {
					name: name,
					ename: englistName,
					desc: desc,
					img: filename + "." + fileType
				};

				// db.insert(anim, function(err) {
				// 	if (err) {
				// 		process.exit(0)
				// 	}
				// 	console.log("数据储存" + err);
				// })

				if (img) {
					exec("wget " + img + " -O " + __dirname + "/anims/" + filename + "." + fileType, function() {
						if (arguments[0]) {
							console.log("下载到：" + num)
							process.exit(0);
						}
					})
				};
				setTimeout(function() {
					num++;

					do {
						obj.url = names[num];
					} while (num > names.length)
				}, 2500)


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