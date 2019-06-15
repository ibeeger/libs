/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-04-10 15:57:45
 */

'use strict';

var http = require("http"),
	cookie = "", host = "localhost",
	type = 'application/json',
	method = 'POST',
	port = 80;
const  fs = require("fs");
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
				"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
				'Content-Type': type,
				'Content-Length': _datalth,
				'Cookie': "HT_SSO_COOKIE=dVpYSXpwdTVJVElGWHp2SU81MzQ3Zz09|11|1523154320554|db67277bc0bf095bec19db765b89b56f; JSESSIONID=FC0B0772190EE9B0EEA21BE637F06F54; sid=1490771544067"
			},
			// agent:keepAliveAgent
		};

		var _req = http.request(_options, function(res) {
			let file = fs.createWriteStream("./"+data.gid+".xlsx","utf8");
			res.pipe(file);
			res.on("end",function () {
				callback("Ok");
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