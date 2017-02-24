/*
 * @Author: ibeeger
 * @Date:   2017-02-24 11:51:38
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2017-02-24 16:32:48
 */

'use strict';


/*
	area 加减乘除 1,2,3,4,0（全部包含）
	numarea 数字范围 最小值 10 最大值 1000;
	count 习题数量
*/

const AREA = [{
	name: "加上",
	formula: "+",
	jc: "-",
}, {
	name: "减去",
	formula: "-",
	jc: "+"
}, {
	name: "乘以",
	formula: "*",
	jc: "/"
}, {
	name: "除以",
	formula: "/",
	jc: "*"
}]

var NumberArea = 10;

var time = new Date().getTime();
function createQuestions(area, numarea, count) {
	var _cout = 1;
	let questions = [];
	while (_cout < count) {
		_cout++;
		let mthIndex = area == 4 ? parseInt(Math.random() * 4) : area;
		let name = AREA[parseInt(mthIndex, 10)]["name"]
		let jc = AREA[parseInt(mthIndex, 10)]["jc"];
		let showmth = AREA[parseInt(mthIndex, 10)]["formula"];
		let json = getRandom(mthIndex, numarea);
		let first = json["first"] //参数1
		let second = json["second"] //参数2
		let answer = json["answer"];
		let arr = getChoose(answer);
		console.log(first + name + second + "等于" + answer + " [" + arr+"]");
	}
	console.log(new Date().getTime()-time+"s");
}


function getChoose(answer) {
	let arr = [];
	let i = 0;
	let num;
	let _answer = answer<4 ? parseInt(Math.random()*60+10) : answer;
	while (i < 3) {
		num = parseInt(Math.random() * _answer + 1);
		if (num != answer) {
				if (arr.indexOf(num)==-1) {
					arr.push(num);
					i++;
				}
		}
	};
	arr.push(answer);
	arr.sort(function(){ return 0.5 - Math.random() });
	return arr;
}

function getRandom(type, numarea) {
	let json = {};
	switch (type) {
		case 0:
			json["first"] = parseInt(Math.random() * numarea + 1, 10);
			json["second"] = parseInt(Math.random() * (numarea - json["first"]) + 1, 10);
			json["answer"] = json["first"] + json["second"]
			break;
		case 1:
			json["second"] = parseInt(Math.random() * numarea+1, 10);
			json["answer"] = parseInt(Math.random() * (numarea-json["second"])+1, 10);
			json["first"] =  json["answer"] + json["second"]

			break;
		case 2:
			json["first"] = parseInt(Math.random() * Math.sqrt(numarea) + 1, 10);
			json["second"] = parseInt(Math.random() * Math.sqrt(numarea) + 1, 10);
			json["answer"] = json["first"] * json["second"];
			break;
		case 3:
			json["second"] = parseInt(Math.random() * Math.sqrt(numarea) + 1, 10);
			json["answer"] = parseInt(Math.random() * Math.sqrt(numarea) + 1, 10);
			json["first"] = json["answer"] * json["second"]

			break;
		default:
			json = null;
	};
	return json;
}



createQuestions(4, NumberArea, 5);