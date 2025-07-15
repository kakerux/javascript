// modules 
// like predefined files
// 

// date module - 
// 


let data = new Date()
console.log(data)


console.log(data.getDate())
console.log(data.getFullYear())
console.log(data.getMonth()+1)  //it counts month from 0 so add one to it 

console.log(data.toLocaleDateString())  //show from yourlocal device
console.log(data.toLocaleTimeString())  //show from yourlocal device



console.log(data.getDay())  //also read from 0 - sunday

// let ar = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// let day = data.getDay()

// console.log(ar[day])

// let ar1 = ['january','february','may','june','july','august','september','october','november','december']
// let month = data.getMonth()
// console.log(ar1[month])
// document.write(ar1[month])

let div = document.querySelector('#div')
let div1 = div.querySelector('#div1')
let head = div1.querySelector('#h1')
head.innerHTML=data.getDate()


let ar = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let day = data.getDay()

let head1 = div1.querySelector('#h2')
head1.innerHTML=data.ar[day]


let ar1 = ['january','february','may','june','july','august','september','october','november','december']
let month = data.getMonth()
let div2=div.querySelector('#div2')
let head2=div2.querySelector('#h3')
head2.innerHTML=ar1[month]




