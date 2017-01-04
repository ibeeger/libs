var base64Img = require('base64-img');
var url = 'http://img.willclass.com/api/generate/qrcode?content=1*1065*13000000050000691099';
base64Img.requestBase64(url, function(err, res, body) {
  	console.log(body)
});