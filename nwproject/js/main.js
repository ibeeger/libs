var fs = require("fs");
var step_height = 0;
// document.querySelector(".fxed").innerHTML = JSON.stringify(fs);
var w =0,h=0,imgs,files,step =0;
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
	state.className = '';
	return false;
};
holder.ondrop = function(e) {
	state.style.display = 'none';
	e.preventDefault();

	files = e.dataTransfer.files;
	// document.querySelector(".fxed").innerHTML = typeof files;
 
		
	  
		
	files = objToArry(files);
	imgs = files.length;
	files.forEach(initImage)

	// do {
	// 	// document.querySelector(".fxed").innerHTML += "asdf";
		

	// 	var buf = new Buffer(fs.readFileSync(files[i].path)).toString("base64");
	// 	img.src = "data:"+files[i].type+",base64,"+buf;
	// 	imgs.push(img);
	// 	// document.querySelector(".fxed").innerHTML += buf;
	// 	// fs.readFile(files[i].path, function() {

	// 	// 	// document.querySelector(".fxed").innerHTML = new Buffer(arguments[1]).toString("base64");
	// 	// 	img.src = new Buffer(arguments[1]).toString("base64");
	// 	// 	imgs.push(img);
	// 	// 	document.querySelector(".fxed").innerHTML += "<br>"+img;
	// 	// 	i++;
	// 	// })
	// 	i++;

	// } while (i<files.length);

	// document.querySelector(".fxed").innerHTML = imgs[0];

	// imgs[0].onload = function(){
	// 	document.querySelector(".fxed").innerHTML = JSON.stringify(arguments);
	// }

	



	//  document.querySelector(".fxed").innerHTML =imageBuffer;

	return false;

};


function objToArry(obj){
	var _obj = [];
	for (var i = obj.length - 1; i >= 0; i--) {
		_obj.push(obj[i])
	};
	return _obj;
};


function getImgSize(img,callback){
	img.onload = function(){
		callback({w:img.width,h:img.height});
	}
}



function initImage(d){
	// states = fs.statSync(d.path);
	step++;
	var img = document.createElement("img");
		img.src = d.path;
		 getImgSize(img,function(ds){
		 	w=Math.max(ds["w"],w);
		 	h+=ds["h"];
			 // document.querySelector(".fxed").innerHTML = step+":"+imgs;
			 	
			if (step == imgs) {
				var canvas = document.createElement("canvas"),ctx = canvas.getContext("2d");
				document.body.appendChild(canvas); 

				canvas.width = w;
				canvas.height = h;
				ctx.fillStyle="#0000ff";
				ctx.fillRect(20,20,150,100);
				 document.querySelector(".fxed").innerHTML = canvas;
				 
			   // document.querySelector(".fxed").innerHTML =JSON.stringify(files[0]);
				for(var i = 0; i< files.length; i++){
					var img = document.createElement("img");
					 img.src = files[i]["path"];
					 img.onload = function(){

					 	 // ctx.drawImage(img,0,i*img.height);
					 	 ctx.fillRect(0,i*img.height,img.width,img.height);
					 	 if (i == imgs) {
					 	 	var pic = document.createElement("img");
					 	 	pic.src = canvas.toDataURL();
					 	   
					 	 	
					 	 };
					 };
				}

			};
			






		});
	
};




