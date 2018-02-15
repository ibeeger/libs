/*
 * @Author: ibeeger
 * @Date:   2018-01-12 16:33:08
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-01-15 15:58:27
 */

'use strict';

const client = require("./tts-ali.js");
const fs = require("fs");
const wav = require('wav');
const child = require("child_process").spawn;
const result = child("/Users/willclass/Documents/codingnet/npmProject/goodspider/bin/gspidertest", [process.argv[2], '.zhuti']);

// WVf5qpLq0MI4O505
const player = require('play-sound')({})
var str = "";
result.stdout.on('data', (data) => {
	console.log(data.toString());
	client(data.toString(), (res) => {
		let voiceBuffer = res
			//console.log('原声buffer'.yellow, voiceBuffer)
		let file = new wav.FileWriter('./tts-aliyun.wav', {
			sampleRate: 9000
		})
		file.write(voiceBuffer)
		file.end()
		player.play('./tts-aliyun.wav')
	})
});


result.on('close', (code) => {
	console.log(`child process exited with code ${code}`);
});