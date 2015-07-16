var riot = require('riot');
// console.log(riot.toString())
var fs = require('fs');
var hello = fs.readFileSync(__dirname +'/hello.tag', 'utf8');
// console.log(hello);

var html = riot.render(hello)

console.log(html) // <timer><p>Seconds Elapsed: 42</p></timer>
// console.log(hello);
