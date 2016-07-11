/*
 * @Author: ibeeger
 * @Date:   2016-07-05 19:53:20
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-07-06 11:33:18
 */

'use strict';
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./a.htm', 'utf8');
var title="123123123123";
var options = {
	format: 'Letter',
	phantomPath: "/usr/local/bin/phantomjs",
	border: {
    "top": "2in",            // default is 0, units: mm, cm, in, px 
    "right": "1in",
    "bottom": "2in",
    "left": "1.5in"
  },
	header: {
		"height": "45mm",
		"contents": '<div style="text-align: center;">Author:'+title+' Marc Bachmann</div>'
	},
	footer: {
		"height": "28mm",
		"contents": '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>'
	},
};


pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
	if (err) return console.log(err);
	console.log(res); // { filename: '/app/businesscard.pdf' } 
});