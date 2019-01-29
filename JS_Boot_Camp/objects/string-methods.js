let name = ' Andrew Mead ';

// Length property
console.log(name.length);

// Concert to upper case
console.log(name.toUpperCase());

// Documentation mdn string

// Convert to lower case
console.log(name.toLowerCase());

let password = 'abc123password098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// Challenge Area

// isValidPassword
// only return true if the length is more than 8 - and it doesn't contain the word password

let isValidPassword = function (password) {
return password.length > 8 && !password.includes('password')

// if(password.length > 8 && !password.includes('password')) {
//     return true
// } else {
//     return false
//  }
};


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@{}@{}'))
console.log(isValidPassword('asdfwerwerdfpassword'))