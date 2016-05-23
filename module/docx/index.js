var fs = require("fs");
var client = require("../dist/http_client.js");

client.setMethod("GET");
client.setHost("www.baidu.com");
client.setType("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
client.post("/", {}, function(rst) {
	var docx = require('officegen').makegen({
		'type': 'docx'
	});
	console.log(docx)
	var out = fs.createWriteStream("out.docx");
	docx.on('finalize', function(written) {
		console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
	});

	docx.on('error', function(err) {
		console.log(err);
	});
	// console.log(rst)
	var page = docx.createP();
	console.log(page)
	// docx.addResourceToParse(rst);
	docx.generate(out);
})