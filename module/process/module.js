/*
* @Author: ibeeger
* @Date:   2017-07-07 17:18:35
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-10 17:32:22
*/

'use strict';

console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');