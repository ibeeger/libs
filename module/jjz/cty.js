/*
* @Author: ibeeger
* @Date:   2017-12-18 10:15:54
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-12-19 20:13:25
*/

'use strict';

const client = require("../dist/https_client");
// const client = require("../dist/https_form");

const sign = require("./sign.js");
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

var tm = "2017-12-19 20:18:12"
var userid = "4c3cfa356a8d4d1099a026d6f9bfde9c";
var appkey = 'kkk';
var deviceid='ddd';
var timestamp = Date.parse(new Date(tm));
var parajson = {userid:userid,appkey:appkey,deviceid:deviceid,timestamp:timestamp};
parajson['token'] = sign(parajson,timestamp);
parajson['timestamp'] = new Date(tm).Format("yyyy-MM-dd hh:mm:ss");
parajson['sign'] = 'aaNVCC001066e36ac1167691beb3e57eea479a939c39eacc24';
parajson["platform"] = "02";
parajson['appsource'] = "";

console.log(parajson);
client.post("/enterbj/platform/enterbj/entercarlist",parajson,function(rst){
	console.log(rst);
})

// client.post("/enterbj/platform/enterbj/getCurPaperCount",{userid:userid},function(rst){
// 	console.log(rst);
// })