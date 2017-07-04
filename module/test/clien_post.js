

'use strict';

var http = require('http');

function post(host,d,url,callback){
	var data = JSON.stringify(d);
    var lth  = Buffer.byteLength(data,'utf8');
	var options = {
          hostname: host,
          port: 80,
          path: url,
          method: 'GET',
          headers: {
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            'Content-Type': 'application/json',
            'Content-Length':lth,
            // 'Cookie':"HT_SSO_COOKIE=VkVsWmhpU2REd2NGWHp2SU81MzQ3Zz09|11|1498629054714|4bc2a59593e8ec536b7136785564862b" 
            'Cookie':"HT_SSO_COOKIE=TjBwQnpqZEdKVFFGWHp2SU81MzQ3Zz09|11|1498630200093|24bf6de1a9dbffa50235213d3473c939" 
          }
    };

  var req = http.request(options, function(res) {
        console.log(res.statusCode);
   
    var str= "";
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        str+=chunk;
    });
    res.on('end', function() {
        if (res.statusCode!=200) {
             console.log("code"+res.statusCode);
        }
      callback(str);
    })
  });

  req.on('error', function(e) {
    console.log('error' + JSON.stringify(e));
  });

  req.write(data);
  req.end();
}




module.exports = {
    post : post
}


 
  