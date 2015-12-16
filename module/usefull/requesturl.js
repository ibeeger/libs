/* 
* @Author: willclass
* @Date:   2015-11-09 14:19:58
* @Last Modified by:   willclass
* @Last Modified time: 2015-11-09 15:19:49
*/

'use strict';

var clt = require("../dist/http_client.js");

clt.setHost("localhost");
clt.setPort("8798");

 clt.post("/learn/addinfo",{username:"ibeeger",id:100,num:1,vid:2},function(){
 	 console.log(arguments)
 })

