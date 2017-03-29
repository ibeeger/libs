/* 
* @Author: willclass
* @Date:   2015-11-09 14:19:58
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-03-29 17:00:28
*/

'use strict';

var clt = require("../dist/http_client.js");

// clt.setMethod("GET");
clt.setHost("student.huitong.com");
// clt.setHost("t.willclass.com");
var i =0;
while(i<1000){
	
		clt.post("/api/wireless/v340/task/schoolwork/index",{},function(arg){
				console.log(arg)
		})
		i++

}
  
