//validation with regular expression

function isValidMobileNumber(number) {
    const pattern = /^([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}$/;
    return pattern.test(number);
  }
  
  module.exports = {
    isValidMobileNumber
  };
  


//The function returns true if the number is valid and false otherwise.

//Example test case

/*




const mobileNumberValidator = require('mobile-number-validator');


const validNumber = '+1-123-456-7890';
const invalidNumber = '12345';

console.log(mobileNumberValidator.isValidMobileNumber(validNumber)); // should print true
console.log(mobileNumberValidator.isValidMobileNumber(invalidNumber)); // should print false



*/
