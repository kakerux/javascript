// local storage
// found in browser
// store data of user in his browser
// approximately 10mb of data
// cant be automatically deleted
// format to store data key:value
// data stored is string
// 4 main function --
// 1>setItem- INSERT
// 2>getItem- RETRIVE with help of key
// 3>removeItem- DELETE
// 4>clear()- ALL DELETE
// to store in local storage for ex-
// localStorage.setItem('key',value) to set item in local storage


function store(){
    let name = document.querySelector('#name').value
    let city = document.querySelector('#city').value
    let contact = document.querySelector('#contact').value
    let age = document.querySelector('#age').value
    let email = document.querySelector('#email').value

    localStorage.setItem('username',name)
    localStorage.setItem('city',city)
    localStorage.setItem('contact',contact)
    localStorage.setItem('age',age)
    localStorage.setItem('email',email)


}

let a = localStorage.getItem('username')
console.log(a)

localStorage.removeItem('age')

// localStorage.clear()
// clears all data from local storage


