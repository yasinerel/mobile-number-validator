/* 
checks if the number is in the format (XXX) XXX-XXXX:
*/

function isValidPhoneNumber(phoneNumber) {
  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return regex.test(phoneNumber);
}


module.exports = isValidPhoneNumber;
