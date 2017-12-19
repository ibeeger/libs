/*
* @Author: ibeeger
* @Date:   2017-12-18 10:15:54
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-12-19 10:40:36
*/

'use strict';

const crypto = require("crypto");
const client = require("../dist/https_client");

// const sign = require("./sign.js");
//显示时间方法
Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};

function sign(json) {
	let t = crypto.createHash("md5");
	// var item = {}
	// Object.keys(json).sort().map(function(key) {
	// 	item[key] = json[key];
	// });
	var url = decodeURIComponent(json);
	t.update(url, "utf8", "hex");
	let item = t.digest("hex").toUpperCase();
	console.log(item);
	 return item;
};


var app_id="d584542d105322";
var app_secret ="abeed7c94b550b6946";
var phone = "18632289695";
var nick = "ddd";
var openid = phone;
var gender=0;
var tmp = Math.round(new Date().getTime()/1000).toString();
var timestamp = tmp.substr(0,10);
sign(app_id+app_secret+gender+nick+phone+openid+timestamp);





// var userid = "4c3cfa356a8d4d1099a026d6f9bfde9c";
// var appkey = 'kkk';
// var deviceid='ddd';
// var timestamp = new Date().Format("yyyy-MM-dd hh:mm:ss");
// var parajson = {userid:userid,appkey:appkey,deviceid:deviceid,timestamp:timestamp};

// // parajson['token'] = "CD8823141BA3F5F07BC807AF154FCD27";
// parajson['token'] = sign(parajson,timestamp);

// // parajson['sign'] = 'aaNVCC0010bd1c66d2e46e66685555e28df02b236863c7e473';
// parajson['sign'] = '';
// parajson["platform"] = "02";
// parajson['appsource'] = "jjzx";

// console.log(parajson);


// client.post("/enterbj/platform/enterbj/entercarlist",parajson,function(){
// 	console.log(arguments);
// })
