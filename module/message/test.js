/**
 * Module dependencies.
 */

TopClient = require('./topClient').TopClient;

var client = new TopClient({
  'appkey': '23670898',
  'appsecret': '7d8f51cfaa0c5ba3a529ee1caa85a437',
  // 'REST_URL': 'http://gw.api.tbsandbox.com/router/rest'
  'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

client.execute('alibaba.aliqin.fc.sms.num.send', {
    'extend': '123456',
    'sms_type': 'normal',
    'sms_free_sign_name': '毕业了',
    'sms_param': '{\"code\":\"1234\"}',
    'rec_num': '18632289695',
    'sms_template_code': 'SMS_53225246'
  },
  function(error, response) {
    if (!error)
      console.log(response);
    else
      console.log(error);
  })