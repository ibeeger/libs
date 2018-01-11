/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-12-26 18:43:05
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
		let keepAliveAgent = new http.Agent({ keepAlive: true });
		var _options = {
			hostname: host,
			port: port,
			path: url,
			method: method,
			headers: {
				// 'Connection':'keep-alive',
				// "HT-Login-Token":"TWd2M2NwL3FNdG9GWHp2SU81MzQ3Zz09",
				// "HT-Platform-Type":"android",
				// "HT-Client-Version":"3.5.0",
				// "HT-Version-Code":30500,
				// "HT-Device-id":353347063280671,
				"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
				// 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
				'Content-Type': "text/html; charset=utf-8",
				// 'Content-Length': _datalth,
				'Cookie': "HT_bench_01=MlZJMU9xcUFoTFFGWHp2SU81MzQ3Zz09|0; HT_SSO_COOKIE=TjBwQnpqZEdKVFFGWHp2SU81MzQ3Zz09|11|1514271352877|f65d90f9f678b4d59cb90ce249f536cf; JSESSIONID=FC0B0772190EE9B0EEA21BE637F06F54; sid=1490771544067"
			},
			agent:keepAliveAgent
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
		// _req.setSocketKeepAlive(true);
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