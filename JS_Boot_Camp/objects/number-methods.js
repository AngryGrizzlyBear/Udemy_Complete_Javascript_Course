let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num)); //round next
console.log(Math.floor(num)); //round down forced.
console.log(Math.ceil(num)); //round up forced.

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 0 to 10 to 20
console.log(randomNum);
// MDN number reference for the number.
// MDN math

// Challenge Area
// Create a function. Take in person's guess (argument)
// 1 in 5 - true if correct - false if not correct.

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // return guess === randomNum
    if (randomNum == guess) {
        return true
    } else {
        return false
    }
};

//console.log(makeGuess(5));

makeGuess();