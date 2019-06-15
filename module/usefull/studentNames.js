/*
* @Author: ibeeger
* @Date:   2017-01-05 09:39:20
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-04-08 11:58:41
*/

'use strict';

const client = require("../dist/http_client_huitong_download.js");
client.setMethod("GET");
client.setHost("t.willclass.com");
// client.setType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
 client.post("/education/xlsx?groupId=10021",{},function (res) {
 	console.log(res);
 })