/* 
* @Author: willclass
* @Date:   2015-10-12 09:44:35
* @Last Modified by:   willclass
* @Last Modified time: 2015-10-12 18:03:18
*/

'use strict';

var http = require("http");
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var db;

// Connection URL
var url = 'mongodb://driving:driving123@localhost:9000/driving';

var index = 537;
// console.log(mong);

function getData(callback){

	//index  max 1229
	http.get("http://wz.jxedt.com/test/abcd/ajax.asp?r=0.7944075774867088&index="+index,function(res){

		var str = "";

		res.on("data",function(data){
			str+=data;
		});

		res.on("end",function(){

			var col = db.collection("questions");
			 
		 
			console.log(str.replace('\\',"123"))
			console.log(str.replace(/\//g,"123"))

			  callback();

			// col.insert(str,function(err,ok){

			// 	if (!err) {
			// 		callback();
			// 	}else{
			// 		console.log(err);
			// 	};

			// })

			
		})

	})


}

function addIndex(){
	index ++;
	if (index > 540) {

		process.exit();
	}else{

		getData(addIndex);
	};
}


MongoClient.connect(url,function(err,sdb){
	assert.equal(err, null);

	// console.log(sdb);
	db = sdb;
	 
	getData(addIndex);

})


 