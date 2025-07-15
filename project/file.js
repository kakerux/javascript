function storedata(){
    // let namee=document.querySelector('#name').value
    // let emaill=document.querySelector('#email').value
    // let passwordd=document.querySelector('#pass').value

    // if(namee==""){
    //     alert('please enter your name')
    //     document.querySelector('#name').focus()
    //     return false
    // }
    // else if(emaill==""){
    //     alert('please enter your name')
    //     document.querySelector('#name').focus()
    //     return false
    // }
    // else if(passwordd==""){
    //     alert('please enter your name')
    //     document.querySelector('#name').focus()
    //     return false
    // }
    
    let userdata = {
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#pass').value,

        
    }
    
        localStorage.setItem('signdata',JSON.stringify(userdata))
}

let storeddata = JSON.parse(localStorage.getItem('signdata'))

function logindata(){
   let logedindata = {
    email:document.querySelector('#loginemail').value,
    password:document.querySelector('#loginpass').value

    

   }
   if(storeddata.email!=logedindata.email||storeddata.password!=logedindata.password){
    alert('USER NOT FOUND')
     return false
    }
}
