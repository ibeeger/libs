/* 
* @Author: willclass
* @Date:   2016-01-09 17:16:44
* @Last Modified by:   willclass
* @Last Modified time: 2016-01-09 17:31:22
*/

'use strict';
var assert = require("assert");
var MongoClient = require('mongodb').MongoClient,
	db;
 


var url = "mongodb://driving:driving123@115.28.35.15:9000/driving";


var jinggao = require("./data/qita.js");

MongoClient.connect(url, function(err, db) {
	assert.equal(err, null);
	 
	
	var col = db.collection("qita");
		 // console.log(jinggao)
		col.insert(jinggao,function(err,rst){
			console.log(arguments);
			process.exit();
		})
})
