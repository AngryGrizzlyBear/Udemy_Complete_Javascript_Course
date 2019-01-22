// Function - input (argument), code, output (return value).

let greetUser = function () {
  console.log('Welcome user!')
};

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue =square(10)

console.log(value)
console.log(otherValue)

// Challenge Area
//convertFahrenheitToCelsius
 let converter = function (fahrenheit) {
     let celsius = (fahrenheit - 32) * 5/9;
    return celsius
};

let temp = converter(32)
let otherTemp = converter(68)

console.log(temp)
console.log(otherTemp)



// Call a couple of times (32 -> 0) (68 -> 20)

// print the converted values