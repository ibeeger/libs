/*
* @Author: ibeeger
* @Date:   2018-04-10 17:50:13
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-04-10 19:22:45
*/

'use strict';

var client = require("../dist/http_client_zhixue.js")
client.setMethod("GET");
client.setHost("www.zhixue.com");
var g = 4444000020000198973;
var tm =Date.now();
var html = [];

client.post("/portalcenter/teacher/getClassDetailByClassId/?t="+tm+"&classId=4444000020000198937&className=%E9%AB%98%E4%BA%8C%E5%B9%B4%E7%BA%A710%E7%8F%AD",{tm:tm},function(res){
	 // res = JSON.parse(res);
	 console.log(res)
})