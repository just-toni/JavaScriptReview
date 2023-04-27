// no.1
let grade = prompt("Enter your grade")
switch(grade){
    case (grade >= 80 || grade <= 100):
        console.log('A')
        break
    case (grade >= 70 || grade <= 79):
        console.log('B')
        break    
    case (grade >= 60 || grade <= 69):
        console.log('C')
        break    
    case (grade >= 50 || grade <= 59):
        console.log('D')
        break
    default:
        console.log('F')
}

// no.2
let month = prompt("Enter month:")
if(month.toLowerCase() == 'september' || month.toLowerCase() == 'october' || month.toLowerCase() == 'november'){
    console.log("The season is Autumn")
}
else if(month.toLowerCase() == 'december' || month.toLowerCase() == 'january' || month.toLowerCase() == 'february'){
    console.log("The season is Winter")
}
else if(month.toLowerCase() == 'march' || month.toLowerCase() == 'april' || month.toLowerCase() == 'may'){
    console.log("The season is Spring")
}
else if(month.toLowerCase() == 'june' || month.toLowerCase() == 'july' || month.toLowerCase() == 'august'){
    console.log("The season is Summer")
}

// no.3
let day = prompt("What is the day today?")
if(day.toLowerCase() == 'monday' || day.toLowerCase() == 'tuesday' || day.toLowerCase() == 'wednesday'
|| day.toLowerCase() == 'thursday' || day.toLowerCase() == 'friday'){
    console.log(`${day.charAt(0).toUpperCase()}${day.substring(1, day.length)} is a working day`)
}
else console.log(`${day.charAt(0).toUpperCase()}${day.substring(1, day.length)} is a weekend.`)
// switch (day){
//     case (day.toLowerCase() == 'monday' || day.toLowerCase() == 'tuesday' || day.toLowerCase() == 'wednesday'
//     || day.toLowerCase() == 'thursday' || day.toLowerCase() == 'friday'):
//         console.log(`${day.charAt(0).toUpperCase()}${day.substring(1, day.length)}is a working day`)
//         break
//     case (day.toLowerCase() == 'saturday' || day.toLowerCase() == 'sunday'):
//         break;
//     default: console.log(day)
// }

