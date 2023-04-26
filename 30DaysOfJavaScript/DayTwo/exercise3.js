// no.1
let word = `Love is the best thing in this world. Some found their love and some are still looking for their love.`
let subWord = /love/gi
console.log(word.match(subWord))

// no.2
let word2 = 'You cannot end a sentence with because because because is a conjunction'
let subWord2 = /because/gi
console.log(word2.match(subWord2))

// no.3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence.replace(/'@'/, ' ')
sentence.replace('%', '')
sentence.replace('$', '')
sentence.replace('#', '')
// console.log(sentence)

// no.4
let thing = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let regEx = /\d+/g
console.log(thing.match(regEx))
let num