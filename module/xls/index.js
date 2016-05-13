/*
* @Author: ibeeger
* @Date:   2016-04-28 14:17:52
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-04-29 15:58:49
*/

'use strict';

 var node_xj = require("xls-to-json");
var xlsx = require("xlsx-to-json");
var excel2json = require("excel-to-json");
  xlsx({
      "input": "./rst.xlsx",
      "output": "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });