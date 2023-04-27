let time = new Date()
let updateHours = time.getHours()
if(time.getHours() < 10 && time.getMinutes() < 10 ? console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} 0${time.getHours()}:0${time.getMinutes()}`)
: console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()} :${time.getMinutes()}`))
if(time.getHours() < 10 ? console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} 
0${time.getHours()}:${time.getMinutes()}`)
: console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()} :${time.getMinutes()}`))
if(time.getMinutes() < 10 ? console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:0${time.getMinutes()}`)
: console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()} :${time.getMinutes()}`));