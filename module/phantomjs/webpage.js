/*
 * @Author: ibeeger
 * @Date:   2016-07-04 19:24:30
 * @Last Modified by:   ibeeger
 * @Last Modified time: 2018-04-08 15:13:59
 */

'use strict';
var webpage = require('webpage').create(),
  filename = 'css-demo.pdf',
  datetime = new Date().toString(),
  title;
var system = require('system');
var args = system.args;

/*
1-url
2-ua
3-cookie

 */


webpage.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36';
phantom.addCookie({
  'value': 'dVpYSXpwdTVJVElGWHp2SU81MzQ3Zz09|11|1523154320554|db67277bc0bf095bec19db765b89b56f',
  /* required property */
  'name': 'HT_SSO_COOKIE',
  /* required property */
  'domain': '.willclass.com',
  'path': '/',
  /* required property */
  'httponly': true,
  'secure': false,
  'expires': (new Date()).getTime() + (1000 * 60 * 60) /* <-- expires in 1 hour */
});

// webpage.viewportSize = { width: 1920, height: 1080 };


webpage.onInitialized = function() {
    if(page.injectJs('core.js')){
        console.log("Polyfill loaded");
    }    
}
webpage.onError = function (argument) {
  console.log(argument,'1231');
}

// webpage.open('http://t.willclass.com/exams/index', function(status) {
webpage.open('http://git.works.com/ph.html', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  };
  var title = webpage.evaluate(function() {
    // document.querySelector(".repository_left_list").style.display="none";
    document.querySelector(".header").style.display = "none";
    return document.querySelector('title').innerText;
  });
  webpage.paperSize = {
    // format: 'A4',
    // orientation: 'portrait',
    width: '378mm',
    height: '534.6mm',
    border: '0.5in',
    header: {
      height: '0.5in',
      contents: phantom.callback(function() {
        return '<h1 style="border-bottom:1px #333 solid;color:#333;">' + title + '</h1>';
      })
    },
    footer: {
      height: '0.5in',
      contents: phantom.callback(function(pageNum, numPages) {
        return '<div style="border-top:1px #333 solid;color:#333;">' +
          '<div style="float:left;">Rendered: ' + datetime +
          '</div><div style="float:right;">Pages: ' +
          pageNum + '/' + numPages + '</div></div>';
      })
    }
  };
  webpage.render(filename);
  console.log('webpage rendered as ' + filename);
  phantom.exit();
});