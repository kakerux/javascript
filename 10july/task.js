// let head = document.getElementById('head1')
// function sum(){
  
//         head.innerHTML=parseInt(head.innerHTML)+5
    
// }
// function sub(){
   
//      let result=parseInt(head.innerHTML)-5
//      if(result>0){
//         head.innerHTML=result-5
//      }
        

    
// }

// function form(){
//     let name = document.querySelector('#name').value
//     let contact = document.querySelector('#contact').value
//     let age = document.querySelector('#age').value
//     let city = document.querySelector('#city').value
//     let email = document.querySelector('#email').value

//     if(name==""){
//         alert('fill up your name')
//         document.querySelector('#name').focus()
//         return false
//     }
//     else if(contact==""){
//         alert('fill up your contact')
//         document.querySelector('#contact').focus()
//         return false
//     }
//     else if(age==""){
//         alert('fill up your age')
//         document.querySelector('#age').focus()
//         return false
//     }
//     else if(city==""){
//         alert('fill up your city')
//         document.querySelector('#city').focus()
//         return false
//     }
//     else if(email==""){
//         alert('fill up your email')
//         document.querySelector('#email').focus()
//         return false
//     }

// }


let img = document.querySelector('#img')
img.setAttribute('width','200px')
img.setAttribute('height','200px')
function img1(){
    img.src = "photo-1752035197224-6e6bdc4f7fb1.avif"
}

function fun(){
let name = document.querySelector('#name').value
let contact = document.querySelector('#contact').value
let age = document.querySelector('#age').value
let city = document.querySelector('#city').value
let email = document.querySelector('#email').value

localStorage.setItem('username',name)
localStorage.setItem('contact',contact)
localStorage.setItem('age',age)
localStorage.setItem('city',city)
localStorage.setItem('email',email)
}

// let name1 = localStorage.getItem('username')
// let contact1 = localStorage.getItem('contact')
// let age1 = localStorage.getItem('age')
// let city1 = localStorage.getItem('city')
// let email1 = localStorage.getItem('email')

// function show(){
//     let head1 = document.querySelector('#head1')
//     let head2 = document.querySelector('#head2')
//     let head3 = document.querySelector('#head3')
//     let head4 = document.querySelector('#head4')
//     let head5 = document.querySelector('#head5')

//     head1.textContent=name1
//     head2.textContent=contact1
//     head3.textContent=age1
//     head4.textContent=city1
//     head5.textContent=email1
// }

let ar = [parseInt(prompt('enter num1')),parseInt(prompt('enter num2')),parseInt(prompt('enter num3')),parseInt(prompt('enter num4')),parseInt(prompt('enter num5')),parseInt(prompt('enter num6')),parseInt(prompt('enter num7')),parseInt(prompt('enter num8')),parseInt(prompt('enter num9')),parseInt(prompt('enter num10')),]
let sum = 0
for(let i=0;i<=9;i++){
    if(ar[i]%2!==0){
      sum += ar[i]

    }
}
let ar1=[sum]
console.log(ar1)