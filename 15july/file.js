//string
// multiple type of characters
// written in double quotes""
// space counts too

let str = "Hacker space"
console.log(str)


console.log(str[1])
console.log(str.length)


// at() allows negative indexing
// starts from end
let an = str.at(-4)
console.log(an)


// repeat 10 times
// repeats any string
let student = "main nahi padhunga"
console.log(student.repeat(10))



// replace in string ("old","new")
let str2 = "we are developers"
let rs = str2.replace('developers','SDE')
console.log(rs)

// replaceAll replaces the same value which is being repeated 
let str3 = "abrahem and benjamin and devillers and cricket and"
console.log(str3.replaceAll('and',','))


let st4 = "developer"
console.log(st4.toUpperCase())


// split converts string to array from a selected point like below its converting 
// string to array from and making 3 elements 
let str5 = "apple and mango and orange"
console.log(str5.split('and'))



// template literals ``
// ${variable} to add variable
// prints howisit you write here

let fname = "nishant"
let mname = "singh"
let lname = "thakur"

console.log(`my name ${fname} ${mname} and ${lname}`) 
