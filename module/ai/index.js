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
// const result = child("/Users/willclass/Documents/codingnet/npmProject/goodspider/bin/gspidertest", [process.argv[2], '.zhuti']);

// WVf5qpLq0MI4O505
// const player = require('play-sound')({})
var str = "";

	client(`天地重善善当先，一个善字天下安。善字传家善是宝，善家处世善路宽。积善之家有余庆，作善之人种福田。自古行善有善报，皇天报善无私偏。莫说行善无报应，善来行到地头边。莫说不善无报应，不善自有天眼观。为民不善民遭戮，做官不善官被参。上世不善今生报，今世不善来生还。近报不善本身显，远报不善子孙间。为人且莫为不善，天罚不善天律严。董卓不善雷殛墓，林甫不善牛轮还。曹操不善三世报，秦桧不善报万年。卿相不善脱不过，何况不善在民间。阳报不善令人怕，不善阴报更可怜。`, 
		(res) => {
			console.log(res);
		let voiceBuffer = res
			//console.log('原声buffer'.yellow, voiceBuffer)
		let file = new wav.FileWriter('./shan.wav', {
			sampleRate: 9000
		})
		file.write(voiceBuffer)
		file.end()
		// player.play('./tts-aliyun.wav')
	})


