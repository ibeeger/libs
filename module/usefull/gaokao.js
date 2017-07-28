/*
 * @Author: ibeeger
 * @Date:   2017-07-28 11:24:08
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-07-28 15:08:51
 * 高考正能量
 */
//http://www.ziyuanku.com/plus/ExamPoint.ashx 高频考点

'use strict';
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const arr = [];

function util(postdata, callback) {

	var _data = querystring.stringify(postdata),
		_datalth = Buffer.byteLength(_data, 'utf8');
	var options = {
		host: 'www.ziyuanku.com',
		port: 80,
		path: '/plus/ExamPoint.ashx',
		method: 'POST',
		headers: {
			'remoteAddress':"110.123.34.50",
			'Accept': 'application/json, text/javascript, */*; q=0.01',
			'X-Requested-With': 'XMLHttpRequest',
			'Accept-Encoding': 'gzip, deflate',
			'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4',
			'Cache-Control': 'no-cache',
			'Connection': 'keep-alive',
			'Origin': 'http://www.ziyuanku.com',
			'Referer': 'http://www.ziyuanku.com/kaodian/10.html',
			'Cookie': 'ASP.NET_SessionId=0vpe3plxhkhhul5drliaoqga; User=BO48hEB+VOHlfhiS5V9DbAPBTXGlQRP2q3d9NjUgwCgAohzEsZqgpsr4uQlIGuv5UMAU3pwjKozPYvEXn3xp7S7OddFgCirMmirCcRh7t8A=; DownValidateCode=76; Hm_lvt_cd586b8941cb8a44be58ff0a9fc10138=1501208160; Hm_lpvt_cd586b8941cb8a44be58ff0a9fc10138=1501212019',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': _datalth,
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
		}
	};

	var reqHttps = http.request(options, function(resHttps) {
		console.log("statusCode: ", resHttps.statusCode+":"+postdata.pointId);
		resHttps.setEncoding('utf8');
		let _body = "";
		resHttps.on('data', function(body1) {
			_body += body1;
		})
		resHttps.on("end", function() {
			try{
				callback(JSON.parse(_body));
			} catch (e) {
				callback(e + ":catch")
				console.log(e + ":catch");
			}
		});
		resHttps.on("error", function() {
			console.log(arguments + ":err")
		})
	});
	reqHttps.write(_data);
	reqHttps.end();
}

var pid = 1;
var _post = {
	action: "getResources",
	pointId: 0,
	time: Date.now()
};

Object.defineProperty(_post, "pointId", {
	set: function(data) {
		util({
			action: "getResources",
			pointId: data,
			time: Date.now()
		}, cb)
	}
})

_post.pointId=1;

function cb(data) {
	if (typeof data == 'object' && data.length > 1) {
		let i = 1;
		let _obj = {
			name: data[0]["Name"],
			childs: [],
			id:data[0]["Id"]
		};
		while (i < data.length) {
			_obj["childs"].push({
				id:data[i]["Id"],
				name: data[i]["Name"],
				stars: data[i]["Stars"]
			});
			i++;
		};
		arr.push(_obj);
	}
	pid++;
	setTimeout(function(){
		_post.pointId = pid;
	},1)
}

process.on("SIGINT", function() {
	fs.writeFile("./kaodian/data.json", JSON.stringify(arr), "utf8", function() {
		console.log(arguments);
		process.exit(0);
	})
})

