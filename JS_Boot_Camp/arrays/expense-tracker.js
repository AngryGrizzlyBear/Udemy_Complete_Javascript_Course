const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    },
    addIncome: function (description, amount) {
        this.income.push({ description, amount });
    },
    getAccountSummary: function () {
        // if(this.expenses.length > 0) {
            let totalExpenses = 0;
            let totalIncome = 0;
            let accountBalance = 0;

            this.expenses.forEach(function(expense) {
                totalExpenses = totalExpenses + expense.amount
            });
            this.income.forEach(function (income){
                totalIncome = totalIncome + income.amount
            });

            accountBalance = totalIncome - totalExpenses;

            return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
        //} else {
         //   return 0
        // }
    }
};

// Expense -> description, amount
// addExpense -> two arguments, description, amount
// Alternate way   addExpense: function (description, amount) {
//         this.expenses.push({
//         description:
//         amount:
//         });
//     },
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.
// Alternate Way
// getAccountSummary: function () {
// let totalExpenses = 0
// this.expenses.forEach(function(expense) {
//  totalExpenses = totalExpenses+ expense.amount
// })
// }


// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak get AccountSummary
// 4. Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Tea', 2.50);
account.addExpense('Coffee', 4.50);
account.addExpense('Rent', 2150);
account.addIncome('Job', 10000);
console.log(account.getAccountSummary(account.expenses));