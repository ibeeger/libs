function getQueryString(name) {
  var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
  var url = decodeURIComponent(location.href);
  if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " "));
  return "";
};

function getUrlParams() {  
  var search = window.location.search;   // 写入数据字典
    
  var tmparray = search.substr(1, search.length).split("&");  
  var paramsArray = new Array;  
  if (tmparray != null) {    
    for (var i = 0; i < tmparray.length; i++) {      
      var reg = /=/;      
      var set1 = tmparray[i].replace(reg, '&');      
      var tmpStr2 = set1.split('&');      
      var array = new Array;      
      array[tmpStr2[0]] = tmpStr2[1];      
      paramsArray.push(array);    
    }  
  }
  console.log(paramsArray);   // 将参数数组进行返回
    
  return paramsArray;
}


function urlparse(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
      idx = x.indexOf(eq),
      kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }



    try {
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

    } catch (e) {
      k = QueryString.unescape(kstr, true);
      v = QueryString.unescape(vstr, true);
    }

    if (!obj.hasOwnProperty(k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
}