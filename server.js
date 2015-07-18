var Hapi = require('hapi'), Path = require('path'), server = new Hapi.Server(), port = process.env.PORT || 8000;
server.connection({ port: port });
console.log("Serving: ", Path.normalize(__dirname + '/index.html'));
server.route([
  { method: 'GET', path: '/',  handler: { file: 'index.html' } },
  { method: 'GET', path: '/todomvc-common/{param*}', handler: { directory: { path: Path.normalize(__dirname + '/node_modules/todomvc-common/') } } }
]);
server.start(function() { console.log('Hapi.js Server Listening on : http://127.0.0.1:' +port) });
