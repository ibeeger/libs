/*
* @Author: ibeeger
* @Date:   2016-07-04 19:24:30
* @Last Modified by:   ibeeger
* @Last Modified time: 2016-07-04 20:54:42
*/

'use strict';
var webpage  = require('webpage').create(),
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


webpage.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
phantom.addCookie({
  'value'   : 'TjBwQnpqZEdKVFFGWHp2SU81MzQ3Zz09|11|1467610953090|d7d794d4a601e93a9426415eae425786',   /* required property */
  'name'    : 'HT_SSO_COOKIE',  /* required property */
  'domain'  : '.teste.huitong.com',
  'path'    : '/',                /* required property */
  'httponly' : true,
  'secure'   : false,
  'expires'  : (new Date()).getTime() + (1000 * 60 * 60)   /* <-- expires in 1 hour */
});

webpage.viewportSize = { width: 1024, height: 768 };

webpage.open('http://local.teste.huitong.com/page/schoolwork/answersheet/1234', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  title = webpage.evaluate(function() {
    return document.querySelector('title').innerText;
  });

  webpage.paperSize = {
    format:      'Letter',
    orientation: 'portrait',
    border: '0.5in',
    header: {
      height: '0.5in',
      contents: phantom.callback(function() {
        return '<h1 style="border-bottom:1px #333 solid;color:#333;">' +
            title + '</h1>';
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