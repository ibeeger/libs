/* 
* @Author: willclass
* @Date:   2016-01-09 15:33:04
* @Last Modified by:   willclass
* @Last Modified time: 2016-01-09 16:36:06
*/

'use strict';
 
 var jsdom = require("jsdom");
var http = require("http");
 var fs = require("fs");
// document.querySelectorAll(".panel .pp");

var filename = "qita"

var i = 0;
var lth;
var $;
var names = []
var nameobj = {}
 jsdom.env({
  url: "http://jtbiaozhi.911cha.com/list_5.html",
  scripts: ["http://ajax.useso.com/ajax/libs/jquery/1.7.2/jquery.min.js?ver=3.4.2"],
  done: function (err, window) {

  	
    $ = window.$;
     

    lth = $(".panel .center a").length;


    getImg(i);

     
  }
});

function getImg(i){
	nameobj = {};
	 var url = $(".panel .center a").eq(i).find("img").attr("src");
	 nameobj["name"] =  $(".panel .center a").eq(i).attr("title");
	http.get(url,SaveImage);
}

 function SaveImage(res){
    var imgData = "";
    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开

    res.on("data", function(chunk){
        imgData+=chunk;
    });

    res.on("end", function(){
        fs.writeFile(__dirname+"/biaozhi/"+filename+"_"+(i+1)+".jpg", imgData, "binary", function(err){
            if(err){
                console.log(err);
                process.exit(0);
            }
            if (i<lth) {
            	console.log(i);
            	nameobj["picurl"] = "/biaozhi/"+filename+"_"+(i+1)+".jpg";
            	names.push(nameobj);
            	getImg(i++);
            }else{
            	fs.writeFile(__dirname+"/"+filename+".json",JSON.stringify(names),"utf8",function(){
            		console.log(arguments);
            	})
            };
        });
    });
}