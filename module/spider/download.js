/*
 * @Author: ibeeger
 * @Date:   2017-01-19 16:45:25
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-05-25 19:13:28
 */

'use strict';
var client = require("../dist/http_client_huitong.js")
client.setMethod("POST");
var g = 13698;
var html = [];
function download(gid) {
	client.post("", {
		groupId: gid,
		groupType: 11
	}, function(res) {
		let list = JSON.parse(res).data.studentInfos;
		let _tlist = JSON.parse(res).data.teacherInfos;
		let start = html.length;
		if (JSON.parse(res).data.hasOwnProperty("studentInfos") && list.length) {
			for (let i = 0; i < list.length; i++) {
				if (list[i].active) {
					html.push({
						name: list[i].name,
						phone: list[i].phoneNum,
						teamid: g+4444000020000198937
					});
				}
			};
		};
		if (JSON.parse(res).data.hasOwnProperty("teacherInfos") && _tlist.length) {
			for (let i = 0; i < _tlist.length; i++) {
				if (_tlist[i].active) {
					html.push({
						name: _tlist[i].realName,
						phone: _tlist[i].phoneNumber,
						teamid: g+4444000020000198937
					});
				}
			};
		};
		if (html.length-start) {
			console.log(g+4444000020000198937, html.length - start);
		};
		g++;
		download(g)
	});
};
download(g);
const fs = require("fs");
process.on("SIGINT", function() {
	var _html = "<table>"
	for (let i = html.length-1; i > 0; i--) {
		_html += "<tr><td>" + html[i].name + "</td><td>" + html[i].phone + "</td><td>" + html[i].teamid + "</td></tr>"
	};
	_html+="</table>";
	fs.writeFile("./result3.html", _html, "utf8", function() {
		console.log("write file " + html.length + " lth",g+"gid");
		process.exit(0);
	})
})