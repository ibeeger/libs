/*
* @Author: ibeeger
* @Date:   2017-07-14 15:42:02
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-07-14 15:46:24
*/

'use strict';

var sharp = require('sharp');

sharp('./tosvg.png')
  .rotate()
  .resize(200)
  // .toBuffer()
  .toFile("./a.svg")
  .then(function(d){
  	console.log(d.toString());
  })
  .catch(function(r){
  	console.log("err"+r)
  });