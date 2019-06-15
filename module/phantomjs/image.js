/*
* @Author: ibeeger
* @Date:   2018-05-22 18:53:32
* @Last Modified by:   ibeeger
* @Last Modified time: 2018-05-23 10:14:54
*/

'use strict';
var webPage = require('webpage');
var page = webPage.create();
var fs = require('fs');

// page.viewportSize = { width: 1200, height: 217808 };

page.onError = function(){
	console.log(arguments);
}
// page.open("https://www.baidu.com", function start(status) {
page.open("http://git.works.com/indexs.html", function(status) {
	console.log(status);
	// var base64 = page.renderBase64('PNG');
	// base64 = base64.replace(/^data:image\/png;base64,/, "");
	// console.log(base64.length);
	// fs.write("a.png", "data:image/png;base64,"+base64, 'w');
  page.render('google_home.png', {format: 'PNG', quality: '100'});
  phantom.exit();
});