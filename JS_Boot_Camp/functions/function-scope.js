// Global scope (convertFahrenheittoCelcius, tempOne, tempTwo)
    // Local Scope (fahrenheit, celsius)
        // Local Scope (isFreezing)
let convertFahrenheitToCelcius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;

  if (celsius <= 0) {
      let isFreeing = true
  }

  return celsius
};

let tempOne = convertFahrenheitToCelcius(32);
let tempTwo =  convertFahrenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);