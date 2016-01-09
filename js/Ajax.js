/* 
 * @Author: willclass
 * @Date:   2015-12-16 18:32:18
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-12-17 14:35:16
 */

'use strict';

(function() {

	

	var url = "/",
		method = "POST",
		file = null,
		data = null,
		header = null,
		resData = null;


	function Ajax(_url) {

		if (typeof _url == "string" && _url != "" && _url.indexOf("http://") == 0) {
			url = _url;
		};
		return this;
	};

	Ajax.prototype.setMethod = function(val) {
		if (typeof val == "string" && val != "") {
			method = val;
		};
	};

	Ajax.prototype.setHeader = function(key, val) {

	}


	Ajax.prototype.setProgress = function(pro) {
		if (typeof pro != "function") {
			return;
		};
		this.progress = pro;
	}

	Ajax.prototype.setData = function(data) {
		var formData = new FormData();

		if (!data || typeof data != "object") {
			return;
		};
		for (var k in data) {
			formData.append(k, data[k]);
		};

		file = formData;
	}

	Ajax.prototype.send = function() {
		var _this = this;
		var xhr = new XMLHttpRequest();

		xhr.onload = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					_this._data = {
						rst: xhr.responseText
					};
					// return Ajax.prototype.done.call(null,xhr.responseText)
				} else {
					_this._data = xhr.status

					// return Ajax.prototype.done.call(null,xhr.status)
				};
			} else {
				_this._data = xhr.status;

				// return Ajax.prototype.done.call(null,xhr.status)
			};
		}

		xhr.onprogress = this.progress || null;

		xhr.open(method, url);
		if (file) {
			xhr.send(file);
		} else {
			xhr.send();

		};
		return this;
	}

	Ajax.prototype.done = function(callback) {
		callback.call(null, this._data)
	}

	window.Ajax = Ajax;

})(this);