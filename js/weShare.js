var sLength = document.getElementsByTagName('script').length;
var dateUrl = document.getElementsByTagName('script')[sLength-1].src;
var arg = dateUrl.indexOf('?') !== -1 ? dateUrl.split('?').pop() : '';
var settings = {};
    arg.replace(/(\w+)(?:=([^&]*))?/g, function(a, key, value) {
        settings[key] = value;
    });

document.addEventListener('WeixinJSBridgeReady',function(){
	WeixinJSBridge.on("menu:share:timeline",function(argv){
	WeixinJSBridge.invoke("shareTimeline",{
	  img_url : "http://"+window.location.host+"/"+settings["pic"],
	  img_width : 300,
	  img_height : 300,
	  link : "http://html5.web0310.com/?tm="+new Date().getTime(),
	  desc : "html5api",
	  title : document.title,
	},function(res){
	 _report('timeline',res.err_msg);	
	})
	})})
