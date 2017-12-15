/*
* @Author: ibeeger
* @Date:   2017-12-08 09:38:30
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-12-08 10:16:39
*/

'use strict';
const readline = require('readline');
const questions = [{
	name:"博客名称",
	key:"name"
},{
	name:"描述",
	key:"description"
},{
	name:"作者",
	key:"author"
},{
	name:"仓库地址",
	key:"git"
},{
	name:"邮箱",
	key:"email"
}]
const initConfig = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "=========================\n=     初始化信息填写    =\n=========================\n"
});
let i =0;
initConfig.prompt();
initConfig.on('line', (line) => {
  if (i>=questions.length) {
  	initConfig.close();
  	return;
  }
  initConfig.setPrompt(questions[i]["name"]+":");
  initConfig.prompt();
  i++

}).on('close', () => {
  process.exit(0);
});