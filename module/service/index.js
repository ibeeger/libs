var thrift = require("thrift");

var index = function(user, fn){
	console.log(user);
	fn('ok');
	return;
};

var remove = function(username, fn){
	console.log(username);
	fn('ok');
	return;
};

var server_framed = thrift.createServer("/", {
    index : index,
    remove : remove,

});

server_framed.listen(9998);