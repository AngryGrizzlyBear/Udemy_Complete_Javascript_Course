let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

let temp = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        // I didn't have to use ` but wanted to test something.
        celsius: `Celsius is ${(fahrenheit-32) * 5/9}`,
        kelvin: `kelvin is ${(fahrenheit + 459.67) * 5/9}`
    }
};


let weather = temp(23);

console.log(weather);