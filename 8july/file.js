let btn = document.querySelector('#btn')


// addeventlistener is a function which helps to perform an event from js
// without html , it can take upto 3 argument but in 3 it gives true and false
// take 2 aurguments ex- below 
// it fire the event 'click' and function() 


// btn.addEventListener('click',function(){
//     alert("working...")

// })

// btn.addEventListener('mouseenter',function(){
//     alert("mouseisenetering")

// })
btn.addEventListener('dblclick',function(){
    alert("doubleclickworking")

})



let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click',()=>{
    let wr = document.querySelector('#wrapper')
    wr.classList.add('main')
})

// .classlist use you can add or remove a class without affecting any
//  others the element may have then use .add .romove and the class name

let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',()=>{
    let wr = document.querySelector('#wrapper')
    wr.classList.remove('main')
})

// toggle is predefined in classlist you dont need to condition it
let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click',()=>{
    let wr = document.querySelector('#wrapper')
    wr.classList.toggle('main')
})
