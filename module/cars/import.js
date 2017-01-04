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