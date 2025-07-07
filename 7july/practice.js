// array of object
// used to help store multiple data for one variable
// ex
// let person = [
// {
    
// }]


let emp = [
    {name:"nishant",age:100,city:'bhopal',contact:1001},
    {name:"virat",age:10,city:'pal',contact:134301},
    {name:"adil",age:38,city:'delhi',contact:100},
    {name:"ab",age:38,city:'indore',contact:3340901},
    {name:"devillers",age:1,city:'bangalore',contact:1000001}
]

//  let ob =   {name:"thkur",age:100,city:'bhopal',contact:1001}

//  let adil = emp.slice(2,3)
 

// emp.unshift(ob)
console.log(emp)
// console.log(adil)


// map function fetch data from array (only works for array)
// let newarray = emp.map( (e) => {return e.age})
let newarray = emp.map( (e) => {return e.age>20})  //it gives true false only
console.log(newarray)


// filter is same as map but also we can apply condition and it provides the result in data but in map it gives true 
// or false instead of data
let new1 =emp.filter((a) => {return a.age>20})
console.log(new1)
