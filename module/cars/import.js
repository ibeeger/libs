/*
* @Author: ibeeger
* @Date:   2016-03-08 15:17:42
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-03-08 15:56:27
*/

'use strict';

var pwd = "./json";
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://driving:driving123@localhost:9000/driving';


 if (process.argv[2] == 'ol') {
 	url = 'mongodb://driving:driving123@115.28.35.15:9000/driving';
 };
// // Use connect method to connect to the Server


function DB() {
	return new Promise(function(resolve, reject) {
		MongoClient.connect(url, function(err, db) {
			resolve(db);
			reject(err);
		});
	})

}



var _dir = fs.readdirSync(pwd);


var _type;

var j = 1;
var d = new Date().getTime();
function saveData(dbc) {
	var type = _dir[j].replace(/\.json/, "");
	var col = dbc.collection("cars_" +(type-1));
	var item = fs.readFileSync(pwd + "/" + _dir[j], "utf8");
	col.insertMany(JSON.parse(item), function() {
		j++;
		console.log(j);
		if (j == _dir.length) {
			console.log(new Date().getTime() - d);
			process.exit(0);
		} else {
			saveData.call(this, dbc);
		};
	});
}

DB().then(saveData, function() {
	
	process.exit(0);
	
})