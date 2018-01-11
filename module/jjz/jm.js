const crypto = require("crypto");

const fs = require("fs");

const item = require("./form.js");

fs.writeFile("./c.png",item.json["carphoto"],{encoding: 'base64'},function(){
	console.log(arguments);
})

// var vlu = "4c3cfa356a8d4d1099a026d6f9bfde9c";
// crypto.getHashes().forEach(function(name){
// 	let item = crypto.createHash(name);
// 			item.update(vlu);
// 			item.update("enterbj");
// 	let v = item.digest('hex');

// 	console.log(name+"======="+v+"-"+v.length);

// })



