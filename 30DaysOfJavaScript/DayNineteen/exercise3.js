function personAccount(){
    let firstName = prompt(`Enter your first name:`);
    let lastName = prompt(`Enter your last name:`);
    let freqIncome = prompt(`How many incomes would you like to enter?`);
    let freqExpenses = prompt(`How many expenses would you like to enter?`);
    let income = [];
    let expense = [];
    let sumIncome = 0;
    let sumExpense = 0;
    function addIncome(){
        for (let index = 0; index < freqIncome; index++) {
            let description = prompt("Enter description for income:");
            let amount = prompt(`Enter amount for ${description}`);
            income.push({
                name: description,
                amount: amount
            })
        }
        return income;
    }
    function addExpense(){
        for (let index = 0; index < freqExpenses; index++) {
            let description = prompt("Enter description for expense:");
            let amount = prompt(`Enter amount for ${description}`);
            expense.push({
                name: description,
                amount: amount
            })
        }
        return expense;
    }
    function getIncome(){
        return income;
    }
    function getExpenses(){
        return expense;
    }
    // not returning the totalExpense and totalIncome for some reason but yet returns the calculated account balance
    function totalExpense(){
        expense.forEach((item)=> {
            sumExpense += Number.parseInt(item.amount);
        })
        return sumExpense;
    }
    function totalIncome(){
        income().forEach((item)=> {
            sumIncome+= Number.parseInt(item.amount);
        })
        return sumIncome;
    }
    function accountBalance(){
        return `Account Balance is ${totalIncome() - totalExpense()}`;
    }
    return{
        totalExpense: totalExpense(),
        totalIncome: totalIncome(),
        addExpense: addExpense(),
        addIncome: addIncome(),
        accountBalance: accountBalance(),
        income: getIncome(),
        expense: getExpenses()
    }
}

const outerFunction = personAccount();
console.log(outerFunction.addIncome);
console.log(outerFunction.addExpense);
console.log(`Total Income is ${outerFunction.totalIncome}`);
console.log(`Total Expense is ${outerFunction.totalExpense}`);
console.log(`${outerFunction.accountBalance}`);
// console.log(`Total Income is ${outerFunction.income}`);
// console.log(`Total Income is ${outerFunction.expense}`);
// console.log(outerFunction.totalExpense);
// console.log(outerFunction.accountBalance);
console.log(outerFunction.income);
console.log(outerFunction.expense);
