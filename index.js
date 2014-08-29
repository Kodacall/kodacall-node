var kodacall = exports;
var http = require('http');
var https = require('https');
var crypto = require('crypto');
var request = require('request');

/*kodacall.base = "https://api.openrmc.org/openrmc-beta";
kodacall.url = kodacall.base + "/api/";
kodacall.apiKey = 'BlyOt9cVdHcmthVLe8zq-JW0AvYvaCgQzPIq22_3uMk';
kodacall.secret = 'kodacall_test'; */

var base, url, apiKey, secret;

kodacall.setBase = function (data){
	base = data;
}

kodacall.setUrl = function (data){
	url = data;
}

kodacall.setApiKey = function (data){
	apiKey = data;
}

kodacall.setSecret = function (data){
	secret = data;
}

kodacall.getBase = function (data){
	return base;
}

kodacall.getUrl = function (data){
	return url;
} 

kodacall.getApiKey = function (data){
	return apiKey;
}

kodacall.getSecret = function (data){
	return secret;
}





//Test call that returns the given message
kodacall.apiEcho = function(message, callback) {

	var method = "echo";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";
	toSign += "message:" + message;

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";
	toRequest += "message=" + webSpace(message);

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});

}

/*kodacall.getEchoButton = function() {

	var method = "getEchoButton";
	var toSign = "";
	var toRequest = "";

	var agent = navigator.userAgent;
	console.log(agent);

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";
	toSign += "message:" + message;

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

} */

//Function to create new user
kodacall.createUser = function(client, callback) {

	var method = "createUser";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";

	for (var propt in client) {
		if (client[propt] == client[Object.keys(client)[Object.keys(client).length - 1]]) {
			if (propt == "clientId") {
				toSign += "client.id:" + client[propt];
			} else if (propt == "firstName") {
				toSign += "firstname:" + client[propt];
			} else if (propt == "lastName") {
				toSign += "lastname:" + client[propt];
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode:" + client[propt];
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber:" + client[propt];
			}
		} else {
			if (propt == "clientId") {
				toSign += "client.id:" + client[propt] + ":";
			} else if (propt == "firstName") {
				toSign += "firstname:" + client[propt] + ":";
			} else if (propt == "lastName") {
				toSign += "lastname:" + client[propt] + ":";
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode:" + client[propt] + ":";
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber:" + client[propt] + ":";
			}
		}
	}

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";

	for (var propt in client) {
		//console.log(propt, client[propt]);

		if (client[propt] == client[Object.keys(client)[Object.keys(client).length - 1]]) {
			if (propt == "clientId") {
				toRequest += "client.id=" + client[propt];
			} else if (propt == "firstName") {
				toRequest += "firstname=" + client[propt];
			} else if (propt == "lastName") {
				toRequest += "lastname=" + client[propt];
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode=" + client[propt];
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber=" + client[propt];
			}
		} else {
			if (propt == "clientId") {
				toRequest += "client.id=" + client[propt] + "&";
			} else if (propt == "firstName") {
				toRequest += "firstname=" + client[propt] + "&";
			} else if (propt == "lastName") {
				toRequest += "lastname=" + client[propt] + "&";
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode=" + client[propt] + "&";
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber=" + client[propt] + "&";
			}
		}
	}

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});
}

//Function to update a current user
kodacall.updateUser = function(client, callback) {

	var method = "updateUser";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";

	for (var propt in client) {
		if (client[propt] == client[Object.keys(client)[Object.keys(client).length - 1]]) {
			if (propt == "clientId") {
				toSign += "client.id:" + client[propt];
			} else if (propt == "firstName") {
				toSign += "firstname:" + client[propt];
			} else if (propt == "lastName") {
				toSign += "lastname:" + client[propt];
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode:" + client[propt];
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber:" + client[propt];
			}
		} else {
			if (propt == "clientId") {
				toSign += "client.id:" + client[propt] + ":";
			} else if (propt == "firstName") {
				toSign += "firstname:" + client[propt] + ":";
			} else if (propt == "lastName") {
				toSign += "lastname:" + client[propt] + ":";
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode:" + client[propt] + ":";
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber:" + client[propt] + ":";
			}
		}
	}

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";

	for (var propt in client) {
		//console.log(propt, client[propt]);

		if (client[propt] == client[Object.keys(client)[Object.keys(client).length - 1]]) {
			if (propt == "clientId") {
				toRequest += "client.id=" + client[propt];
			} else if (propt == "firstName") {
				toRequest += "firstname=" + client[propt];
			} else if (propt == "lastName") {
				toRequest += "lastname=" + client[propt];
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode=" + client[propt];
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber=" + client[propt];
			}
		} else {
			if (propt == "clientId") {
				toRequest += "client.id=" + client[propt] + "&";
			} else if (propt == "firstName") {
				toRequest += "firstname=" + client[propt] + "&";
			} else if (propt == "lastName") {
				toRequest += "lastname=" + client[propt] + "&";
			} else if (propt == "phonecountryCode") {
				toSign += "phone.countryCode=" + client[propt] + "&";
			} else if (propt == "phonenationalNumber") {
				toSign += "phone.nationalNumber=" + client[propt] + "&";
			}
		}
	}

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});


}

kodacall.requestResources = function(client, callback) {

	var method = "requestResources";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";

	for (var propt in client) {
		//console.log(propt, client[propt]);

		if (propt == "clientId") {
			toSign += "client.id:" + client[propt];
		} else if (propt == "addButtons") {
			toSign += "add.call.buttons:" + client[propt] + ":";
		}
	}

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";

	for (var propt in client) {
		//console.log(propt, client[propt]);

		if (propt == "clientId") {
			toRequest += "client.id=" + client[propt];
		} else if (propt == "addButtons") {
			toRequest += "add.call.buttons=" + client[propt] + "&";
		}
	}

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});
}

kodacall.getResourceSummary = function(client, callback) {

	var method = "getResourceSummary";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";

	for (var propt in client) {
		//console.log(propt, client[propt]);
		if (propt == "clientId") {
			toSign += "client.id:" + client[propt];
		} else {

		}

	}

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";

	for (var propt in client) {
		//console.log(propt, client[propt]);
		if (propt == "clientId") {
			toRequest += "client.id=" + client[propt];
		} else {

		}
	}

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});
}

kodacall.getActivatedButton = function(client, callback) {

	var method = "getActivatedButton";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";

	for (var propt in client) {
		if (propt == "clientId") {
			toSign += "client.id:" + client[propt] + ":";
		} else if (propt == "refererPath") {
			toSign += "referer.path:" + client[propt];
		}

	}

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";

	for (var propt in client) {
		//console.log(propt, client[propt]);
		if (propt == "clientId") {
			toRequest += "client.id=" + client[propt] + "&";
		} else if (propt == "refererPath") {
			toRequest += "referer.path=" + webSpace(client[propt]);
		}
	}

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});

}

kodacall.deactivateButton = function(client, callback) {

	var method = "deactivateButton";
	var toSign = "";
	var toRequest = "";

	toSign += method + ":";
	toSign += apiKey + ":";
	toSign += secret + ":";

	for (var propt in client) {
		if (propt == "clientId") {
			toSign += "client.id:" + client[propt];
		} else if (propt == "buttonId") {
			toSign += "button.id:" + client[propt] + ":";
		}

	}

	console.log(toSign);

	var signature = hash(toSign);
	console.log(signature);

	toRequest += url;
	toRequest += method + "?";
	toRequest += "key=" + apiKey + "&";
	toRequest += "signature=" + signature + "&";

	for (var propt in client) {
		//console.log(propt, client[propt]);

		if (propt == "clientId") {
			toRequest += "client.id=" + client[propt];
		} else if (propt == "buttonId") {
			toRequest += "button.id=" + client[propt] + "&";
		}
	}

	console.log(toRequest);

	request({
		uri: toRequest,
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	}, function(error, response, body) {
		if (error) {
			console.log(error)
		} else {
			console.log(body);
			callback(body);
		}
	});

}

kodacall.getCallToken = function(client, callback) {

  var method = "getCallToken";
  var toSign = "";
  var toRequest = "";
  // hardwired useragent
  var userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36'
  
  var clientId = client;


  toSign += method + ":";
  toSign += apiKey + ":";
  toSign += secret + ":";
  toSign += "callee:" + clientId + ":";
  toSign += "user.agent:" + userAgent;

  //console.log(toSign);


  var signature = hash(toSign);
  //console.log(signature);

  toRequest += url;
  toRequest += method + "?";
  toRequest += "key=" + apiKey + "&";
  toRequest += "signature=" + signature + "&";
  toRequest += "callee=" + clientId + "&";
  toRequest += "user.agent=" + webSpace(userAgent);

  console.log(toRequest);

  var x = request({
    uri: toRequest,
    method: "GET",
    //timeout: 10000
    //followRedirect: true,
    //maxRedirects: 10
  }, function(error, response, body) {
    if (error) {
      console.log(error)
    } else {
      //console.log(response);
      //console.log(body);
      callback(body);
    }
  });

}

kodacall.getSignallingConfig = function(client, callback) {
  var method = "getSignallingConfig";
  var toSign = "";
  var toRequest = "";

  toSign += method + ":";
  toSign += apiKey + ":";
  toSign += secret + ":";
  toSign += "user:" + client;

  console.log(toSign);

  var signature = hash(toSign);
  console.log(signature);

  toRequest += url;
  toRequest += method + "?";
  toRequest += "key=" + apiKey + "&";
  toRequest += "signature=" + signature + "&";
  toRequest += "user=" + client;

  console.log(toRequest);

  request({
    uri: toRequest,
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function(error, response, body) {
    if (error) {
      console.log(error)
    } else {
      console.log(body);
      callback(body);
    }
  });
}

function hash(message) {
	var hash = crypto.createHash('sha256').update(message).digest('base64');
	console.log(hash);
	var signature = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
	//console.log(signature);
	return signature;
}

function webSpace(message) {
	var signature = message.replace(/ /g, '%20').replace(/\//g, '%2F').replace(/\;/g, '%3B').replace(/\:/g, '%3A');
	//console.log(signature);
	return signature;
}
