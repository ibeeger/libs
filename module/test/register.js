/* 
* @Author: willclass
* @Date:   2015-10-19 11:04:38
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-05 16:13:32
*/

'use strict';

var createClass = "/teacher/api/group/create"
var regurl = "/student/api/user/fetchSmsIdentifyCode";

var http =require("http");

var m = 10000;

var enumber = 99999999;


var createPost = JSON.stringify({
	enterSchoolYear: "2025",
	groupNo: "7",
	major: "1"
})

var postData = JSON.stringify({
  'phone' : '19800000000',
  'type':1
});


post(postData,regurl);

function post(data,url){
	var options = {
  hostname: 'student.willclass.com',
  port: 80,
  path: url,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
      /*console.log('No more data in response.')*/
      if (m<=0) {
        process.exit();
      };
       postData = JSON.stringify({
          'phone' : 138+""+parseInt(Math.random()*enumber),
          'type':1
        });
      post(postData,url);
    })
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  /*write data to request body*/
  req.write(data);

  console.log(data);

  console.log(m);
  if (m <=0) {
     req.end();
  }else{
    m--
  };

 
}

