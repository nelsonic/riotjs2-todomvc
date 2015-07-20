var riot = require('riot');
var views = require('./views');
var html = riot.render(views.hello, {name: 'Ana'});
console.log(html);
