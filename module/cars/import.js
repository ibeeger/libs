<<<<<<< HEAD
var city = [
	"北京",
	"安徽",
	"福建",
	"甘肃",
	"广东",
	"广西",
	"贵州",
	"海南",
	"河北",
	"河南",
	"黑龙江",
	"湖北",
	"湖南",
	"吉林",
	"江苏",
	"江西",
	"辽宁",
	"内蒙古",
	"宁夏",
	"青海",
	"山东",
	"山西",
	"陕西",
	"上海",
	"四川",
	"天津",
	"西藏",
	"新疆",
	"云南",
	"浙江",
	"重庆"
];

var dbconf = require("./dbconfig.js");
var assert = require("assert");
var MongoClient = require('mongodb').MongoClient,
	db;

function saveData(){

}

var child_process = require("child_process");

var fs = require("fs");


var workerProcess = child_process.spawn("ls", [__dirname + "/json/"]);





workerProcess.stdout.on('data', function(data) {
	var list = data.toString().split("\n");
	var k =0;



});

workerProcess.stderr.on('data', function(data) {
	console.log('stderr: ' + data);
});

workerProcess.on('close', function(code) {
	console.log('子进程已退出，退出码 ' + code);
});
=======
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
>>>>>>> d580909ee1ad277055dd197b220a4626f52f8f74
