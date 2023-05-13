const PersonAccount = {
    firstName:'Tiffany',
    lastName: 'Hudson',
    income: [
    {
        description: "Salary",
        amount: 20000
    },
    {
        description: "Tax Return",
        amount: 8000
    },
    {
        description: "Refund",
        amount: 1000
    }
    ], 
    expenses:[
    {
        description: "Rent",
        amount: 2000
    },
    {
        description: "Grocery",
        amount: 1000
    },
    {
        description: "Gas",
        amount: 200
    }
    ],
    totalIncome: function(){
        let sum = 0;
        this.income.forEach(amount => sum+= amount.amount);
        return sum;
    },
    totalExpense: function(){
        // let sum = 0;
        this.expenses.reduce((assn,consc) => assn + consc, 0)
        // return sum;
    },
    displayIncome: function(){
        let result = "";
        for (let index = 0; index < this.income.length; index++) {
            const element = this.income[index];
            result += element.description + ": $" + element.amount + "\n";
        }
        return result;
    },
    displayExpense: function(){
        let result = "";
        for (let index = 0; index < this.expenses.length; index++) {
            const element = this.expenses[index];
            result += element.description + ": $" + element.amount + "\n";
        }
        return result;
    },
    accountInfo: function(){
        return `Name: ${this.firstName} ${this.lastName}\nIncomes:\n${this.displayIncome()}Expenses:\n${this.displayExpense()}Total income: $${this.totalIncome()}\nTotal expenses: $${this.totalExpense()}`
    },
    accountBalance: function(){
        return this.totalIncome - this.totalExpense
    },
    addIncome: function (income) {
        this.income.income_description.push(income)
    },   
    addExpense: function (expense) {
        this.expenses.expenses_description.push(expense)
    }
}


const personAccount2 = JSON.stringify(PersonAccount);
localStorage.setItem("PersonAccount", personAccount2);
localStorage.getItem("PersonAccount");