/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-04-10 19:19:41
 */

'use strict';

var http = require("http"),
	cookie = "", host = "localhost",
	type = 'application/x-www-form-urlencoded; charset=UTF-8',
	// type = 'application/json',
	method = 'POST',
	port = 80;
const crypto = require('crypto');
const fmdt = require("form-data");
var client = {
	post: function(url, data, callback) {
		var _data = JSON.stringify({}),
			_datalth = Buffer.byteLength(_data, 'utf8');
		let keepAliveAgent = new http.Agent({ keepAlive: true });
		var _options = {
			hostname: host,
			port: port,
			path: url,
			method: method,
			headers: {
				'Connection':'keep-alive',
				"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
				'Content-Type': type,
				'Content-Length': _datalth,
				'Host': 'www.zhixue.com',
				'Origin': 'http://www.zhixue.com',
				'Referer':"http://www.zhixue.com/portalcenter/teacher/class/main/",
				'Cookie': "JSESSIONID=6579F694C391103F5C53BCB8D9117191;  aliyungf_tc=AQAAAFkuNXgk9AkAvg2A3iPjbd3gVcc0; tlsysSessionId=9c91c076-cfa5-47a1-b35f-4715038eb0a1; loginUserName=zxt279544; HEADER_ROLE_SID=0.6369425141056553; __session:0.14874091677918844:4444000020002174890=true; loginName=%E5%AE%8B%E6%95%8F; loginRole=teacher; avatar=null"
			},
			agent:keepAliveAgent
		};

		var _req = http.request(_options, function(res) {
			// console.log("statecode:"+res.statusCode);
			console.log(res.headers);
			console.log(res.headers["set-cookie"]);
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