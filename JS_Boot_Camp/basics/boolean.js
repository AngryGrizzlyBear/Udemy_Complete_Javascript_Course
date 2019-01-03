// === - equality operator
// !== - no equality operator
// < - less than operator
// > - greater than operator
// >= greater than or equal to
// <= less than or equal to

let temp = 110;

if (temp <=32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
        console.log('It is not freezing....It is waay too hot outside!')
    } else {
        console.log("It's not so bad!")
    }


// Challenge

// Create age set to your age
let age = 67;

// Calculate is child - if they are 7 or under
// let isChild = age <= 7;

// Calculate is senior - if they are 65 or older
// let isSenior = age >= 65;

// print is child value
// console.log(isChild);

// print is senior value
// console.log(isSenior);

// if 7 or under print message about child pricing.
if (age <= 7) {
    console.log("You're getting a children's discount!")
} else {
    if(age >= 65) {
        console.log("You're getting the senior's discount!")
    } else {
        console.log("You have to pay the normal price, bub.")
    }
}
// If 65 or Older print message about senior discount
