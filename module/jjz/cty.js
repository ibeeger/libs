/*
* @Author: ibeeger
* @Date:   2017-12-18 10:15:54
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-12-22 17:53:48
*/

'use strict';

// const clients = require("../dist/https_client");
const client = require("../dist/https_form");

const sign = require("./sign.js");

const all = require("./form.js");

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

var tm = "2017-12-20 11:06:43"
// var userid = "4c3cfa356a8d4d1099a026d6f9bfde9c"; //我的
var userid = "0ea7fe7cc30b4db7b0ff4a814434a296";
var appkey = 'kkk';
var deviceid='ddd';
var timestamp = Date.parse(new Date(tm));
var parajson = {userid:userid,appkey:appkey,deviceid:deviceid,timestamp:timestamp};
parajson['token'] = sign(parajson,timestamp);
parajson['timestamp'] = new Date(tm).Format("yyyy-MM-dd hh:mm:ss");
parajson['sign'] = 'aaNVCC0010fba194e23fe932b9c8a6cb43df5f110339011e92';
parajson["platform"] = "02";
parajson['appsource'] = "";

// client.post("/enterbj/platform/enterbj/entercarlist",parajson,function(rst){
// 	console.log(rst);
// })


//查询环保信息
// const hbjson = {
// 	appsource:"bjjj",
// 	userid:userid,
// 	carid:all.json.carid,
// 	licenseno:all.json.licenseno,
// 	carmodel:all.json.carmodel,
// 	carregtime:all.json.carregtime
// };
// client.post("/enterbj/platform/enterbj/checkenvgrade",hbjson,function(rst){
// 	console.log(rst);
// })


//查看状态是否可以申请
// client.post("/enterbj/platform/enterbj/curtime_03?userid="+userid,{},function(rst){
// 	console.log(rst);
// });

//查询环保
// client.post("/enterbj-img/platform/enterbjImg/echoImg",{"applyid":"026201712180339256315857","carid":"5965851","userid":userid,"appsource":"bjjj"},function(rst){
// 	console.log(rst);
// })

//申请接口
// client.post("/enterbj-img/platform/enterbj/submitpaper_03",{},function(rst){
// 	console.log(rst)
// })

//查询进京证办理情况
client.post("/enterbj/platform/enterbj/getCurPaperCount",{userid:userid},function(rst){
	console.log(rst);
})