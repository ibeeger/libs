/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-10-28 14:54:14
 */

'use strict';

var http = require("http"),
	cookie, host = "localhost",
	type = 'application/json',
	method = 'POST';


var client = {
	post: function(url, data, callback) {
		var _data = JSON.stringify(data),
			_datalth = Buffer.byteLength(_data, 'utf8');

		var _options = {
			hostname: host,
			port: 80,
			path: url,
			method: method,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
				'Content-Type': type,
				'Content-Length': _datalth,
				'Cookie': cookie
			}
		};

		var _req = http.request(_options, function(res) {
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
	setCookie: function(name, value) {
		cookie = name + "=" + value;
	},
	setType: function(value) {
		type = value;
	}
}


module.exports = client;