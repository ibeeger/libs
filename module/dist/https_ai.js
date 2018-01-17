/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-01-12 19:24:32
 */

'use strict';

var https = require("https"),
	cookie = "",
	host = "nlsapi.aliyun.com",
	type = 'text/plain',
	method = 'POST',
	port = 443;
var FormData = require('form-data');
const crypto = require('crypto');
const app_secret = 'rgVL9VtBXxzDFkiDz2In0dKpeEy2cn';
const fs = require("fs");

const request = require("request");

var client = {
	post: function(url, data, cb) {
		let date = new Date().toUTCString();
		const md5sum = crypto.createHash("md5");
		var str = md5sum.update(data.body);
		str = md5sum.digest('base64');
		var feature = "POST\naudio/wav, application/json\n" + str + "\ntext/plain\n" + date;
		var sign = crypto.createHmac('sha1', app_secret);
		sign.update(feature);
		// var _options = {
		// 	protocol: "https:",
		// 	hostname: host,
		// 	port: port,
		// 	path: url,
		// 	method: method,
		// 	body:data.body,
		// 	headers: {
		// 		"Date":date,
		// 		"Accept": "audio/mp3, application/json",
		// 		"Authorization": "Dataplus WVf5qpLq0MI4O505:" + sign.digest().toString("base64"),
		// 		'Content-Type': 'text/plain',
		// 	}
		// };
		// 
		var _options = {
			url: 'http://nlsapi.aliyun.com'+url+'&encode_type=wav&voice_name=xiaogang&sample_rate=16000&volume=100',
			method: method,
			body: data.body,
			headers: {
				"accept": "audio/wav, application/json",
				'content-Type': 'text/plain',
				"date": date,
				"Authorization": "Dataplus WVf5qpLq0MI4O505:" + sign.digest().toString("base64"),
			}
		};

		function callback(error, response, body) {
			if (error) {
				console.log("error", error)
			}
			cb(response,body)
				// console.log("阿里云文字转语音结果: ".yellow, '=> ', body)
		}
		request(_options, callback);

		// var _req = https.request(_options, function(res) {
		// 	console.log("statecode:"+res.statusCode);
		// 	var write = fs.createWriteStream(__dirname+"/../ai/a.mp3");
		// 	res.pipe(write);


		// 	// var str = "";
		// 	// // res.setEncoding('utf8');

		// 	// res.on("data", function(body) {
		// 	// 	str += body;
		// 	// });
		// 	res.on("end", function() {
		// 		callback("ok");
		// 	});
		// 	res.on("error", function() {
		// 		console.log(arguments);
		// 		callback(null)
		// 	})
		// });
		// _req.write(data.body);
		// _req.end();
	},
	setHost: function(value) {
		host = value;
	},
	setMethod: function(value) {
		method = value;
	},
	setPort: function(value) {
		port = value;
	},
	setCookie: function(name, value) {
		cookie = name + "=" + value;
	},
	setType: function(value) {
		type = value;
	}
}


module.exports = client;