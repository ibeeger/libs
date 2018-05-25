/* 
 * @Author: willclass
 * @Date:   2015-10-28 14:41:09
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-05-03 10:09:25
 */

'use strict';

var https = require("https"),
	cookie = "", host = "xiaodu.baidu.com",
	type = 'application/json',
	method = 'POST',
	port = 443;
var ref = "",ua='Mozilla/5.0 (Linux; Android 7.0; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36';
const crypto = require("crypto");
var client = {
	post: function(url, data, callback) {
		var _data = JSON.stringify(data),
			_datalth = Buffer.byteLength(_data, 'utf8');
		var _options = {
			protocol: "https:",
			hostname: host,
			port: port,
			path: url,
			method: method,
			headers: {
				// "Pragma":"no-cache",
				// "Cache-Control":"no-cache",
				// "Accept-Language":"zh-CN,en-US;q=0.8",
				// "Host":"enterbj.zhongchebaolian.com",
				"Content-Length":_datalth,
				// "Accept":"*/*",
				// "Connection":"keep-alive",
				// "Origin":"https://enterbj.zhongchebaolian.com",
				'Referer':ref,
				// 'Content-Type': 'application/json;charset=UTF-8',
				// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				// "X-Requested-With":"com.zcbl.bjjj_driving",
				'User-Agent': ua,
				// "Cookie":"JSESSIONID=F6D8CBC97FFAF60A038EA50FC065603E; Hm_lvt_daecd84bb62f83c2d1287d077258d200=1505801215; Hm_lpvt_daecd84bb62f83c2d1287d077258d200=1505802180; UM_distinctid=15f0922d6e2195-0c41753a728e8a-2b3d3e17-38400-15f0922d6e4173; CNZZDATA1260761932=51048846-1499207624-https%253A%252F%252Fenterbj.zhongchebaolian.com%252F%7C1513650640",
				// "Accept-Encoding":"gzip, deflate",
			}
		};
		
		var _req = https.request(_options, function(res) {
			var str = "";
			res.setEncoding('utf8');
			res.on("data",function(body){
				str+=body;
			});
			res.on("end",function(){
				callback(str);
			});
			res.on("error",function(){
				console.log(arguments);
				callback(null)
			})
		});
		_req.write(_data);
		_req.end();
	},
	setHost: function(value) {
		host = value;
	},
	setRef: function(value) {
		ref = value;
	},
	setUa: function(value) {
		ua = value;
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