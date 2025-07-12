// destructuring of array
// getting values of array through variable and not indexing

// let ar = (let [name,num,city]= ["cybrom",18,"bhopal"])
let [name,num,city]= ["cybrom",18,"bhopal"]
console.log(name)


// spread operator  =  ...
// can merge array elemts of multiple arrays to one
let ar1 = ["Google","azrue"]
let ar2 = ["amazon","flip"]
let ar3 = [...ar1,...ar2,'ar3']
ar3=[...ar3]
// ar3 is overwritten
console.log(ar3)



// let {namee,contact,age}={
//     namee:"nishant",
//     contact:113344,
//     age:50,

// }

// console.log(namee)


let ob={n:1,m:2}
let ob1={n1:1,m1:2}
let ob2={}
ob2={...ob,...ob1}
console.log(ob2)


// node js is a run time environment which help to run javascript run outside 
// browser