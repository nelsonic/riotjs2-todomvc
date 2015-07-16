var riot = require('riot');
console.log(riot.toString())
var fs = require('fs');
var hello = fs.readFileSync(__dirname +'/hello.tag')

var html = riot.render(hello, { world: "World!" })

console.log(hello) // <timer><p>Seconds Elapsed: 42</p></timer>
