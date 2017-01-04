/* 
 * @Author: willclass
 * @Date:   2016-02-19 14:58:12
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-10-14 12:03:44
 */

'use strict';

var fs = require("fs");
var http = require("http");

var start = 100000;

function getImage(num) {

	var _options = {
		hostname: "image.16888.com",
		port: 80,
		path: "/dealer/flogo/" + num + ".gif",
		method: "GET",
		"Cache-Control": "no-cache",
		headers: {
			Cookie: "car16888_set_cityId=76; car16888_set_provinceId=6; car16888_set_area=7; car16888_set_areaName=%E5%B9%BF%E5%B7%9E; car16888_set_areaDir=gz; _alicdn_sec=56c6c1f808699cbb27877df7fecc316e1fe4bf25",
			Connection:"keep-alive",
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/5137.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
		}
	};
	// var url = " http://image.16888.com/dealer/flogo/";
	var req = http.request(_options, function(res) {
		// console.log(res.statusCode+":"+num);
		if (res.statusCode != 200) {
			start++;
			if (start > 130000) {
				process.exit(0);
			};
			getImage(start);

		} else {
				console.log("有图:" + num);
			var str = "";
			res.setEncoding('binary')
			res.on("data", function(body) {
				str += body;
			});
			res.on("end", function() {
				fs.writeFile("./logos/" + num + ".gif", str, "binary", function() {
					start++;
					if (start > 130000) {
						process.exit(0);
					};
					getImage(start);
				})
			})
		}
	});
	req.write("");
	req.end();
};

getImage(start);