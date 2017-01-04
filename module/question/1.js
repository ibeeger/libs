/*
* @Author: ibeeger
* @Date:   2016-05-19 10:24:06
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-05-19 11:10:38
*/

'use strict';

function item(num){
	let _nb = process.argv[2];
	let lth = _nb.toString().length;
    let rst = 0;
    if (lth === 1) {
    	rst = _nb/num>=1 ? 1 :0;
    }else{
    	 
    }
	

	console.log(rst);

}


item(5);
