/*
* @Author: ibeeger
* @Date:   2017-02-13 11:33:51
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-02-13 11:36:39
*/

'use strict';
const fonts = ["我","大","米","土","天","地","马","花","个","画","上","下","洗","衣","服","鸡","做","过","了","不","乐","出","入","书","本","车","的","你","我","他","她","水","火","木","皮","儿","子","女","大","小","吃","草","鱼","牛","兔","鸟","羊","好","家","飞","学","习","校","河","有","山","田","左","右","云","朵","老","师","语","文","雨","天","桥","来","去","口","耳","目","足","日","月","禾","竹","沙","发","报","纸","台","灯","电","视","晚","果","笑","也","球","身","体","远","近","色","听","声","无","春","夏","秋","冬","方","园","元","旦","漂","门","香","伞","闪","星","空","蓝","红","头","床","故","乡"]

const pinyin = require("pinyin");


var list = []


for(var i=0; i<fonts.length; i++){
	list.push({
		name:fonts[i],
		pinyin:pinyin(fonts[i]).join("")
	});
}

console.log(list)