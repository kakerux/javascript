function storedata(){
    let userdata = {
        name:document.querySelector('#name').value,
        contact:document.querySelector('#contact').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#pass').value,
    }
    localStorage.setItem('signdata',JSON.stringify(userdata))
}

let storeddata = JSON.parse(localStorage.getItem('signdata'))
// console.log(storeddata)
// now storeddata is a object
// i cant compare with string thats why you have to store it in object form

function logindata(){
    let logedindata={
        email:document.querySelector('#loginemail').value,
        password:document.querySelector('#loginpass').value,
    }
    if(storeddata.email!=logedindata.email||storeddata.password!=logedindata.password){
        alert('USER NOT FOUND')
        return false
    }
}