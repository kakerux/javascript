// type ->3 with arg and with return value

// function demo(a){
//     return a+a
// }
// console.log(demo(10))   

// let b = demo(10)
// console.log(5*b*b)


// type -4 
// function demo(){
    // let b = 5
    // console.log(b)   ---  this will appear always
//     let a = prompt("enter your name")
//     return a
// }
// console.log(demo())


// two types of function in js
// named and anonoumous 
// currently we were learning named

// what is es xi

// Arrow function  -- for writing one liner function we use this
// let fun = () => {return console.log('Hii')}
// fun()
// this will call the function and print hii
// console.log(fun) 
// this will act as a variable and print whatever is written in it

// () => {}
// () => ()
// () => 
//    =>

//     let demo = (a,b) => {return a+b}
//     console.log(demo(2,5))

// let ob = {
//     name : 'nisant',
//     address : 'bhopal',
//     contact : '45454',
//     location : function(){
//         alert('mp nagar')
//     },
//     country : () =>{return 'india'},
// }
// ob.location()


// write a program take 3 inputs and pritn multiple using 3 type
// function mult(a,b,c){
//     return a*b*c
// }
// console.log(mult(parseInt(prompt('enter 1st number')),parseInt(prompt('enter 2nd number')),parseInt(prompt('enter 3rd number'))))

// write a pro to take radius from user print area of circle using 4
function radius(){
    let a = parseInt(prompt('enter the radius'))
    return 3.14*a*a
}
console.log(radius())


