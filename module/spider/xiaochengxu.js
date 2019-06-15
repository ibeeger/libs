/*
* @Author: ibeeger
* @Date:   2018-04-10 17:50:13
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-04-12 14:58:11
*/

'use strict';
//获取宝宝古诗名称
var client = require("../dist/https_client.js");
const fs = require("fs");
// client.setMethod("POST");
// client.setHost("26323739.xiaochengxulianmeng.com");
// client.setType("application/x-www-form-urlencoded");
// client.setRef("https://servicewechat.com/wx8038e967ed084585/4/page-frame.html");
// client.setUa("Mozilla/5.0 (Linux; Android 8.0; VTR-AL00 Build/HUAWEIVTR-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044022 Mobile Safari/537.36 MicroMessenger/6.6.5.1280(0x26060536) NetType/WIFI Language/zh_CN MicroMessenger/6.6.5.1280(0x26060536) NetType/WIFI Language/zh_CN");
// const list = [];
// const map = new Map();
// function fetch(){
// 	client.post("/WeChatStoryImpress/storyAction!findStory",{},function(res){
// 		let _list = JSON.parse(res);
// 		let _size = map.size;
// 		for (var i = _list.length - 1; i >= 0; i--) {
// 			if(!map.has(_list[i]["stoName"])){
// 				map.set(_list[i]["stoName"],_list[i]["stoId"])
// 			}
// 		};
// 		if (map.size!=_size) {
// 			console.log("新增"+(map.size-_size)+","+map.size+"个了");
// 		};
// 		fetch();
// 	})
// }
// fetch();
// process.on("SIGINT",function(){
// 	map.forEach(function(value,key,item){
// 		list.push({
// 			id:value,
// 			name:key
// 		});
// 	});
// 	fs.writeFile("./list.json",JSON.stringify(list),"utf8",function(){
// 			console.log(list.length+"条记录");
// 		process.exit(0);
// 	})
// })

const { exec } = require('child_process');
fs.readFile("./list.json",'utf8',function(err,res){
	res = JSON.parse(res);
	for (var i = res.length - 1; i >= 0; i--) {
		let name =  res[i]["id"];
		if(res[i]["id"].toString().length==1 ){
			name = "00"+res[i]["id"];
		}
		if (res[i]["id"].toString().length==2) {
			name = "0"+res[i]["id"];
		};
		exec("mv ../puppeteer/stroyId="+name+".mp3 ./mp3/"+res[i]["id"]+".mp3",function(err){
			if (!err) {
				console.log(name);
			}
		}); 
	}
});