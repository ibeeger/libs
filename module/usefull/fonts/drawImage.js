/*
 * @Author: ibeeger
 * @Date:   2018-04-11 19:30:43
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-04-12 14:57:23
 */

'use strict';

const {
	exec
} = require('child_process');
var os = require('os');

function ecode(str) {
	let _ = ""
	for (let i = 0; i < str.length; i++) {
		_ += "\\u" + str.charCodeAt(i).toString(16);
	};
	return _;
}
var font = os.platform() == "darwin" ? "Kaiti" : "AR-PL-UKai-CN-Book";
// AR-PL-UKai-CN-Book 服务器使用字体
let txt = process.argv[2];
let filename = !isNaN(txt) ? txt : txt.charCodeAt(0);
let _resultjpg = "./" + filename + ".jpg",
	_background = "./background.jpg",
	_txtpng = "./" + filename + ".png";
exec("convert -size 500x500 -background transparent -gravity center -fill Red -font " + font + " -pointsize 450 label:" + txt + " " + _txtpng,
	function(err, rst) {
		if (!err) {
			exec("convert " + _background + " " + _txtpng + " -gravity center -quality 60% -composite  " + _resultjpg, function(e, r, k) {

			})
		} else {

		}
	})