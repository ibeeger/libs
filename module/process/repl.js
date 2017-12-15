/*
* @Author: ibeeger
* @Date:   2017-07-10 18:44:47
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-10 18:44:48
*/

'use strict';

const repl = require('repl');
var msg = 'message';

repl.start('> ').context.m = msg;