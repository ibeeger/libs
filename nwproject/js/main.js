var fs = require("fs");
var os = require('path');
 // document.querySelector(".fxed").innerHTML =  os.dirname();

var w = 0,
	h = 0,
	imgs, files, step = 0,
	timer;
hs = [];
var holder = document.querySelector('.box'),
	state = document.getElementById('status');

if (typeof window.FileReader === 'undefined') {
	state.className = 'fail';
} else {
	state.className = 'success';
}

holder.ondragover = function() {
	state.className = 'hover';
	return false;
};
holder.ondragend = function() {
	state.className = 'norm';
	return false;
};
holder.ondrop = function(e) {
	hs = [], h = 0, w = 0, h = 0, step = 0;
	e.preventDefault();
	files = e.dataTransfer.files;
	
	
	files = objToArry(files);
	imgs = files.length;
	// files.forEach(initImage);
	// document.querySelector(".fxed").innerHTML = step + ":" + imgs;


	timer = setInterval(function() {
		var img = document.createElement("img");
		img.src = files[step].path;
		state.innerHTML = step+"正在合并中....."
		makeImage(img);
	}, 100);

	return false;
};


function objToArry(obj) {
	var _obj = [];
	for (var i = obj.length - 1; i >= 0; i--) {
		_obj.push(obj[i])
	};
	return _obj;
};


function getImgSize(img, callback) {
	img.onload = function() {
		callback({
			w: img.width,
			h: img.height
		});
	}
}


function makeImage(pic) {
	getImgSize(pic, function(ds) {
		w = Math.max(ds["w"], w);
		hs.push(h);
		h += ds["h"];
		step++;
		if (step == imgs) {
			clearTimeout(timer);
			var canvas = document.getElementById('cs'),
				ctx = canvas.getContext("2d");
			canvas.width = w;
			canvas.height = h;
			// document.querySelector(".fxed").innerHTML = files.length;
			for (var i = 0; i < files.length; i++) {
				var img = document.createElement("img");
				img.src = files[i]["path"];
				ctx.drawImage(img, 0, hs[i]);
				if (i == files.length - 1) {
					var base64Data = cs.toDataURL().replace(/^data:image\/png;base64,/, "");
					fs.writeFile(process.env.HOME+"/Desktop/result.png", base64Data, "base64", function() {
					    // document.querySelector(".fxed").innerHTML = JSON.stringify(process.env);
						state.className = 'norm';
						state.innerHTML = "合并完成~桌面查看result.png";

						base64Data = "";
					})
				};

			}
		}
	});
}

function initImage(d) {
	// states = fs.statSync(d.path);
	var img = document.createElement("img");
	img.src = d.path;
	getImgSize(img, function(ds) {
		w = Math.max(ds["w"], w);
		hs.push(h);
		h += ds["h"];
		step++;
		if (step == imgs) {
			var canvas = document.getElementById('cs'),
				ctx = canvas.getContext("2d");
			canvas.width = w;
			canvas.height = h;
			document.querySelector(".fxed").innerHTML = files.length;
			for (var i = 0; i < files.length; i++) {
				var img = document.createElement("img");
				img.src = files[i]["path"];

				ctx.drawImage(img, 0, hs[i]);
				if (i == files.length - 1) {
					var base64Data = cs.toDataURL().replace(/^data:image\/png;base64,/, "");
					fs.writeFile(process.env.PWD + "/a.png", base64Data, "base64", function() {
						// document.querySelector(".fxed").innerHTML = arguments;
						state.className = 'norm';
						state.innerHTML = "合并完成......";
						base64Data = "";
					})
				};

			}
		};
	});

};