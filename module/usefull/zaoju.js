/*
* @Author: ibeeger
* @Date:   2018-05-03 10:05:10
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-05-04 14:45:47
*/

'use strict';

// https://xiaodu.baidu.com/ws
// 
const client = require("../dist/https_zaoju_client.js");

client.post("/ws",{
	"appid": "",
	"appkey": "",
	"sdk_ui": "yes",
	"sdk_init": "no",
	"appname": "com.baidu.robot",
	"channel_from": "",
	"channel_ctag": "",
	"from_client": "na",
	"location_system": "wgs84",
	"hint_id": "",
	"client_msg_id": "cc3f3725-634b-4539-b36d-5e71aca7111d",
	"CUID": "9D5A63160AA0F01900AE56A996A755CE|182814530887268",
	"operation_system": "androidapp",
	"sample_name": "bear_brain_wireless",
	"request_uid": "9D5A63160AA0F01900AE56A996A755CE|182814530887268",
	"app_ver": "3.1.0.0",
	"device_brand": "HUAWEI",
	"device_model": "VTR-AL00",
	"imgsearch_result": "",
	"service_name": "",
	"request_query":  process.argv[2],
	"query_type": "1",
	"debug": "0"
},function(data){
	data = JSON.parse(data);
	console.log(data);
})