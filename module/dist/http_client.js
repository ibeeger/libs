/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-03-29 16:53:09
 */

'use strict';

var http = require("http"),
	cookie = "", host = "localhost",
	type = 'application/json',
	method = 'POST',
	port = 80;


var client = {
	post: function(url, data, callback) {
		var _data = JSON.stringify(data),
			_datalth = Buffer.byteLength(_data, 'utf8');
		var _options = {
			hostname: host,
			port: port,
			path: url,
			method: method,
			headers: {
				"HT-Login-Token":"TWd2M2NwL3FNdG9GWHp2SU81MzQ3Zz09",
				"HT-Platform-Type":"android",
				"HT-Client-Version":"3.5.0",
				"HT-Version-Code":30500,
				"HT-Device-id":353347063280671,
				// 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
				'Content-Type': type,
				// 'Content-Length': _datalth,
				// 'Cookie': "HT_bench_01=MlZJMU9xcUFoTFFGWHp2SU81MzQ3Zz09|0; HT_SSO_COOKIE=U3VpSmEvazdndjBGWHp2SU81MzQ3Zz09|11|1490764828278|31008c327808a066b625d913f66de9b8; JSESSIONID=FC0B0772190EE9B0EEA21BE637F06F54; sid=1490771544067"
			}
		};

		var _req = http.request(_options, function(res) {
			// console.log("statecode:"+res.statusCode);
			var str = "";
			res.setEncoding('utf8');
			res.on("data",function(body){
				str+=body;
			});
			res.on("end",function(){
				callback(str);
			});
			res.on("error",function(){
				callback(null)
			})

		});
		_req.write(_data);
		_req.end();
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