/*
* @Author: ibeeger
* @Date:   2017-07-07 17:18:35
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-10 17:35:59
*/

'use strict';

exports.done = false;
 
setTimeout(function(){
	exports.done = true;
},5000)