var fs = require("fs");
var client = require("../dist/http_client.js");

client.setMethod("GET");
client.setHost("www.baidu.com");
client.setType("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
client.post("/", {}, function(rst) {
	var docx = require('officegen').makegen({
		'type': 'docx'
	});
	var out = fs.createWriteStream("out.docx");
	docx.on('finalize', function(written) {
		console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
	});

	docx.on('error', function(err) {
		console.log(err);
	});
	// console.log(rst)
	var page = docx.createP();
	 page.addText(rst);
	docx.generate(out);
})