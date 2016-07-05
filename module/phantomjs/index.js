/*
 * @Author: ibeeger
 * @Date:   2016-07-04 19:25:51
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2016-07-04 20:58:23
 */

'use strict';

const spawn = require('child_process').spawn;

const ua = "";
const url = "";
const cookie = "";

const ph = spawn("phantomjs", ["./webpage.js", , "123123"]);


ph.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`);
});

ph.stderr.on('data', (data) => {
	console.log(`stderr: ${data}`);
});

ph.on('close', (code) => {
	console.log(`child process exited with code ${code}`);
});