let temp = 55

// Logical And Operator True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise.
if (temp >= 60  && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp<= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh, do what you want.')
}

// Challenge Area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Be sure to offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Be sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu.')
}

// Are both vegan? Only offer up vegan dishes.
// At least one Vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu.



