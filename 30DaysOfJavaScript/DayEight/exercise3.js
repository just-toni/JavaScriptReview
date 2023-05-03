// no.1
const personAccount = {
    firstName:'Tiffany',
    lastName: 'Hudson',
    income: {
        income_description: [1000,2000,3000,500.45,30]
    },
    expenses:{
        expenses_description: [345.67, 442, 600, 78.90, 10]
    },
    totalIncome: function(){
        let sum = 0
        for (let index = 0; index < this.income.income_description.length; index++) {
            const element = this.income.income_description[index];
            sum+=element
        }
    },
    totalExpense: function(){
        let sum = 0
        for (let index = 0; index < this.expenses.expenses_description.length; index++) {
            const element = this.expenses.expenses_description[index];
            sum+=element
        }
    },
    accountInfo: function(){
        return `
            Name: ${this.firstName}${this.lastName}\n
            Incomes: ${this.income}\n
            Expenses: ${this.expenses}\n
            Total income: ${this.totalIncome()}
            Total expenses: ${this.totalExpense()}
        `
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

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// no.2 a
const signUp = (new_user_username, new_user_email, new_user_password) => {
    let new_user_id = Math.random().toString(36).substring(2, 8)
    const idList = Object.values(users._id)
    while(idList.includes(new_user_id)){
        new_user_id = Math.random().toString(36).substring(2, 8)
    }
    let new_user_createdat = new Date().getMonth() + "/" + new Date().getDay() + "/" + new Date().getFullYear() + " " + 
    new Date().getHours() + ":" + new Date().getMinutes()
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element.username === new_user_username || element.email === new_user_email || element.password === new_user_password ){
            return `Account already exists, please log in instead.`
        }
        else {
            users.push(new_user_id, new_user_username, new_user_password, new_user_createdat, false)
            return 'Account successfully created, you may log in now!'
        }
    }    
}

// no.2b
const logIn = function(username, password){
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element.username === username){
            if(element.password === password){
                element.isLoggedIn = true
            }
            element.isLoggedIn = false
        }
    }
}

// no.3a
// how do we get the user's name who gives the rating because a user rates the product???
// if the user enters their name, how do we get the id based on the name given??
const rateProduct = function(name, rate){
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if(element.name === name){

        }
    }
}

// no.3b
const averageRating = function(name){
    let sum = 0, count = 0
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if(element.name === name){
            for (let index = 0; index < element.ratings.length; index++) {
                const rate = element.ratings[index];
                sum+= rate.rate
                count++
            }
        }
    }
    console.log(sum)
    console.log(count)
    return sum / count
}
console.log(averageRating('mobile phone'))

// no.4
// same problem with 3a, user needs to like the product so how do we combine two different products to talk to themselves especially
// since the user doesn't specify their name or do they? hmmm.
const likeProduct = function(name_of_product){
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if(element.name === name_of_product){
            
        }
    }
}