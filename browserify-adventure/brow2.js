var uniq = require('uniq');
var str = prompt();
var newstr = str.split(',');
var newnew = uniq(newstr);
console.log(newnew)