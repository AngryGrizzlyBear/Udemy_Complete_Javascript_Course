let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
};
// let otherAccount = myAccount;
// otherAccount.income = 1000;
// Account for Andrew has $900. $1000 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
};

// addIncome
let addIncome = function (account, income) {
    account.income = account.income + income;
};

// reset account
let resetAccount = function (account) {
     account.income = 0;
     account.expenses = 0;
};

// getAccountSummary
let getAccountSummary = function (account){
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
};

// let getAccountSummary = function (account) {
//     console.log(`Account for ${account.name} has $${account.income - account.expenses}.
// $${account.income} in income. $${account.expenses} in expenses.`)
// };

addIncome(myAccount, 2990);
addExpense(myAccount, 1990);
getAccountSummary(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
getAccountSummary(myAccount);
console.log(getAccountSummary(myAccount));
// Account for Andrew has $900. $1000 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary
