// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
// console.log(names);
const sayHi = require('./5-utls');
const data = require('./6-altexport');
// console.log(data);
require('./7-mindGranade');
// sayHi('rony');
// sayHi(names.john);
// sayHi(names.peter);