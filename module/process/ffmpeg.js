'use strict'

var sw = require("child_process").spawn;

var ffmpeg = sw("ffmpeg",["-i", "/Users/willclass/Downloads/e直播.mp4", "-vcodec", "libx264", "-preset", "fast", "-profile", "baseline", "-x264opts","bitrate=300", "-s", "320x240","-acodec" ,"libmp3lame" ,"-ar" ,"44100", "-f", "flv", __dirname+"/a.flv"])

var ffmpeg = sw(process.cwd()+"\\tools\\bin\\ffmpeg.exe",["-i", file, "-y", "-vcodec", "copy", "-acodec", "copy", __dirname+"\\output.mp4"])

ffmpeg.stdout.on("data",function(body){
	console.log(body.toString());
});

ffmpeg.stderr.on("data",function(body){
	console.log("err"+body);
})

ffmpeg.on("exit",function(c){
	console.log("code"+c);
})