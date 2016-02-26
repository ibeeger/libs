/* 
 * @Author: willclass
 * @Date:   2015-12-29 14:58:38
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-12-29 15:24:33
 */

'use strict';

(function(p) {
	var Util = {
		win: {
			width: window.innerWidth,
			height: window.innerHeight
		},
		getScrollPosition: function() {
			return {
				x: window.scrollX,
				y: window.scrollY
			}
		},
		setDebug:function(arg){
			if (arg) {
				
			};
		}

	}


	p.Util = Util;
})(window)