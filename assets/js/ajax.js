
var ajax = {
	'defaults': {
		'method': 'GET',
		'url': null,
		'data': null,
		'noCache': false,
		'multipart': false,
		'success': function() {},
		'error': function() {}
	},
	'add_random': function(data) {
		data = data != null ? '&' : '';
		data += Math.random();
	},
	'request': function (options) {

		var o = this.merge(this.defaults, options),
			sendData = null;

		if(o.noCache) {
			this.add_random(o.data);
		}

		var xhr = new XMLHttpRequest();

		if(o.method.toLowerCase() == "get") {
			o.url += "?" + o.data;
		}

		xhr.open(o.method, o.url);

		xhr.addEventListener('readystatechange', function(ev) {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					o.success(xhr.responseText);
				} else {
					o.error();
				}
			}
		});

		if(o.method.toLowerCase() == "post" || o.method.toLowerCase() == "put") {
			sendData = o.data;
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			if(o.multipart) {
				xhr.setRequestHeader('Content-Type', 'multipart/form-data');
			}
		}

		xhr.send(sendData);
	},
	/**
	* Mergea dos objetos
	* @return Object
	*/
	'merge': function(obj1, obj2) {
		var salida = obj1;

		for(var i in obj2) {
			salida[i] = obj2[i];
		}

		return salida;
	}
}


/**
 * Wrapper de document.querySelector().
 * @return HTMLElement
 */
function $(str) {
	return res = document.querySelector(str);
}


