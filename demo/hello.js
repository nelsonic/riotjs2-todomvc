var riot = require('riot');
// console.log(riot.toString())
// var fs = require('fs');
// var hello = require('./hello.tag')
var views = require('./views');
// console.log(hello);

var html = riot.render(views.hello, {name: 'Ana'})

console.log(html) // <timer><p>Seconds Elapsed: 42</p></timer>
// console.log(hello);
