/* 
 * @Author: willclass
 * @Date:   2016-02-18 16:16:58
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-03-08 14:56:47
 */

'use strict';

var http = require("http");
var url = require("url");
var jsdom = require("jsdom");
var fs = require("fs");
var jquery = fs.readFileSync("./jquery.js", "utf-8");

var json = {
		city: "邯郸",
		county: "县城",
		name: "4s店",
		phone: "电话",
		carNum: "数量",
		brand: "品牌",
		brandPic: "品牌图片",
		addr: "地址"
	}
	// 34
var pids = 34,
	curpid = 1;
var pages = 0,
	page = 0;

var option = {
	host: "http://dealer.16888.com/?tag=search&"
}

var arr = [];

function getData(query) {
	
	jsdom.env({
		url: option.host + query,
		// scripts: ["http://code.jquery.com/jquery.js"],
		src: [jquery],
		done: function(err, window) {
			var $ = window.$;
			pages = Math.ceil($(".show_title em").text()/20);
			if ($(".cars_show").find("dd.show").length > 0) {
				$(".cars_show dl").map(function(index, item) {
					var it = $(item);
					var addr = it.find("dd.show>p").eq(3).remove("a,span");
					var num = it.find("dd.show>p").eq(0).find("a").eq(1).text();
					var pic = it.find("dt img").attr("src").trim().split("/");
					pic = pic[pic.length-1];
					pic = pic.split("_")[0];
					var brands=[];
					it.find("dd.show>p").eq(1).find("a").map(function(i,a){
						brands.push($(a).text());
					})
					var _item = {
						city:it.find(".area p").eq(0).text(),
						county:it.find(".area p").eq(1).text(),
						name:it.find("dd.show>p").eq(0).find("a").eq(0).text(),
						phone:it.find("dd.show>p").eq(2).find("em").text(),
						carNum:num.replace(/\D+/g,"") || "未知",
						brand:brands,
						brandPic:pic,
						addr:addr.text()
					};
					 arr.push(_item);
				});				 
				page++;
				console.log(query)
				getData("pid=" + curpid + "&page=" + page);
			} else {

				if (page < pages) {
					page++;
					getData("pid=" + curpid + "&page=" + page);
				} else {
					fs.writeFile("./json/"+curpid+".json",JSON.stringify(arr),"utf8",function(){
						page = 1;
						curpid++;

						if (curpid == pids) {
							process.exit(0);
							console.log("结束");
						};
						arr = new Array();
						getData("pid=" + curpid + "&page=" + page);
					})
				}
			}


		}
	});
};


getData("pid=1");