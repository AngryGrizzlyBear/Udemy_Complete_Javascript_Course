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

let getTip = function (total, tipPercent= .2)  {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}.`
};

total = getTip(412,);
total2 = getTip(25, .1);
total3 = getTip(70, .3);
total4 = getTip(100);
console.log(total);
console.log(total2);
console.log(total3);
console.log(total4);

// Challenge area
// A 25% tip on $40 would be $10

let name = 'Vikram';
let age = 24;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);