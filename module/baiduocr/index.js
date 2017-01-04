/*
 * @Author: ibeeger
 * @Date:   2016-06-01 11:42:11
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-06-04 14:50:14
 */

'use strict';

var fs = require("fs");
var ocr = require('baidu-ocr').create('d3ba4f86f237930d2abae2892b7d789d'),
	image = __dirname + "/rst.png";
var bitmap = fs.readFileSync("./ocr.jpg");
var base64 = new Buffer(bitmap).toString('base64');


// console.log(base64)

// detectType: `LocateRecognize`代表整图文字检测、识别,以行为单位（默认）  
// languageType: `CHN_ENG`(中英)（默认）  
// imageType: `2`代表图片原文件（只支持JPG，大小不能超过300K）
// image: 图片流对象 或 base64 编码的字符串  
// 
ocr.scan('SingleCharRecognize', 'CHN_ENG', 1, encodeURI(base64), function(err, data) {
	if (err) {
		return console.error(err);
	}
	// console.log('words:' + data);
	console.log(data)
});