/*
* @Author: ibeeger
* @Date:   2017-07-25 16:18:23
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-25 16:28:42
*/

'use strict';

var _ = {name:"123"}

Object.defineProperty(_,"item",{
	// value:"static",
	enumerable:true, //是否可以object.keys 获取
	get:function(){
		return this.name;
	},
	set:function(i){
		console.log(i)
	}
});

console.log(Object.keys(_));

console.log(_.item);