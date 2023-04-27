// no.1
let month = prompt("Enter a month:")
switch(true){
    case(month.toLowerCase() == "january" || month.toLowerCase() == "march" || month.toLowerCase() == "july"
    || month.toLowerCase() == "august" || month.toLowerCase() == "october" || month.toLowerCase() == "december"):
    console.log(`${month.charAt(0).toUpperCase()}${month.substring(1, month.length)} has 31 days`)
    break
    case(month.toLowerCase() == "april" || month.toLowerCase() == "june" || month.toLowerCase() == "september"
    || month.toLowerCase() == "november" ):
    console.log(`${month.charAt(0).toUpperCase()}${month.substring(1, month.length)} has 30 days`)
    break
    case(month.toLowerCase() == "february"): 
    console.log(`${month.charAt(0).toUpperCase()}${month.substring(1, month.length)} has 28 days in a leap year and 29 days in a non leap year`)
    break
    default : console.log("Days")
}