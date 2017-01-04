/* 
 * @Author: willclass
 * @Date:   2015-12-29 12:01:22
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-12-29 20:22:55
 */

'use strict';

(function() {


	var childList = [],
		isScroll = false,
		page = 0,
		nowpage = 0;
	var _opt = {
		dom: "#wrap",
		time: 1000,
		step: 10
	};

	var pos = {}

	function Scroll(opt) {

		if (typeof opt == "object") {
			_opt = _.extend(_opt, opt);
		};
		childList = document.querySelectorAll(_opt.dom + ">div");
		this._ = document.querySelector(_opt.dom);
		this._.style.height = Util.win.height + "px";

		for(var j =0; j< childList.length-1; j++){
			pos["p"+j] = childList[j].offsetTop
		}

	};


	Scroll.prototype.to = function() {
		var dom = this._;


 		dom.style.WebkitTransform = "translateY(-" + pos["p"+page] + "px)"; 

 		var t = setInterval(function(){
 			 isScroll = false;
 			 
 			 clearInterval(t)
 		},1000)

	}

	var k = new Scroll();

	window.addEventListener("wheel", function(e) {
		e.preventDefault();

		if (!isScroll) {
			isScroll = true;
			if (e.deltaY > 0) {
				
				page = page < childList.length - 1 ? page + 1 : 0;
				 
			} else {
				
				page = page > 0 ? page - 1 : childList.length - 1;
				 
				 
			};
			
			k.to();
		};

	}, false)

	window.Scroll = Scroll;

})()