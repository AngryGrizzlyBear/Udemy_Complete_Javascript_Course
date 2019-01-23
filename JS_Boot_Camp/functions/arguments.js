// Multiple Arguments
let add = function (a, b, c) {
 return a + b + c
};

let result = add(10, 1, 13);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area
// total, tipPercent, .1 .2 .3 (100 x .1 .2 or .5)

let getTip = function (total, tipPercent= .2) {
   return total * tipPercent
};

total = getTip(412.22,);
total2 = getTip(23.42, .1);
total3 = getTip(70.23, .3);
total4 = getTip(100);
console.log(total);
console.log(total2);
console.log(total3);
console.log(total4);

let name = 'Vikram';
let age = 24;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);