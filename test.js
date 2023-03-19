const isValidPhoneNumber = require('./index');

console.log(isValidPhoneNumber('(123) 456-7890')); // true
console.log(isValidPhoneNumber('123-456-7890')); // false
