var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server();

server.connection({
	host: '0.0.0.0',
	port: Number(process.env.PORT)
});

var riot = require('riot');
var views = require('./views');
var html = riot.render(views.hello, {name: 'Ana'});
console.log(html);


function hello_handler (request, reply) {
	var html = riot.render(views.hello, {name: 'yourname'})
	console.log(html);
	return reply(html);
}

server.route([
  { method: 'GET', path: '/hello/{param*}',  handler: hello_handler },
  { method: 'GET', path: '/{param*}', handler: { directory: { path: Path.normalize(__dirname + '/') } } }
]);

server.start(function () {
	// require('./lib/chat').init(server.listener, function(){
	// 	console.log(process.env.REDISCLOUD_URL);
		console.log('What do you want to talk about...?', 'listening on: http://127.0.0.1:'+process.env.PORT);
	// });
});

module.exports = server;
