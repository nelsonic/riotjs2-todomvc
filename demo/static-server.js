var Hapi = require('hapi'), Path = require('path'), server = new Hapi.Server(), port = process.env.PORT || 8000;
server.connection({ port: port });
server.route( { method: 'GET', path: '/{param*}', handler: { directory: { path: Path.normalize(__dirname + '/') } } });
server.start(function() { console.log('Static Server on : http://127.0.0.1:' +port) });
console.log(">>> " + Path.normalize(__dirname + '/inxed.html'));
