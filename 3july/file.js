
function formvalidate(){

    let name = document.querySelector('#name').value
    let city = document.querySelector('#city').value
    let contact = document.querySelector('#contact').value
    let age = document.querySelector('#age').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    if(name==""){
        alert('please enter your name')
        document.querySelector('#name').focus()
        return false
    }

    else if(city==""){
        alert('please enter your city')
        document.querySelector('#city').focus()
        return false
    }


    else if(contact==""){
        alert('please enter your contact')
        document.querySelector('#contact').focus()
        return false

    }

  else if(contact.length>10||contact.length<10){
        alert('please enter 10 digit contact')
        document.querySelector('#contact').focus()
        return false
        
    }


    else if(age==""){
        alert('please enter your age')
        document.querySelector('#age').focus()
        return false
    }

    else if(age.length>3||age.length<3){
        alert('please enter 3 digit age')
        document.querySelector('#age').focus()
        return false
        
    }

    else if(isNaN(contact)){
        alert('please enter digits only in contact')
        document.querySelector('#contact').focus()
        return false
        
    }

    else if(isNaN(age)){
        alert('please enter digits only in age')
        document.querySelector('#age').focus()
        return false
        
    }

    else if(email==""){
        alert('please enter email id')
        document.querySelector('#email').focus()
        return false
        
    }

    else if(!(email.includes("@"))){

        alert('please enter correct email id "@"')
        document.querySelector('#email').focus()
        return false
        
    }

    
    else if(!(email.includes("@gmail.com"||"@yahoo.com"))){

        alert('please enter correct email id "@gmail.com or @yahoo.com"')
        document.querySelector('#email').focus()
        return false
        
    }

    else if(password==""){
        alert('please enter your password')
        document.querySelector('#password').focus()
        return false
    }

    else if(!(password.match(/[!@#$%^&*_]/))){
        alert('password should includes a special character')
        document.querySelector('#password').focus()
        return false 

    }

    else if(password>8||password<8){
        alert('password should be of 8 charactors')
        document.querySelector('#password').focus()
        return false
    }
    
    else if(!(password.match(/[A-Z]/))){
        alert('password should contain a capital letter')
        document.querySelector('#password').focus()
        return false 
    }

    else if(!(password.match(/[1-9]/))){
        alert('password should contain a digit')
        document.querySelector('#password').focus()
        return false 
    }


    

}


// .isNaN - not a number
// .length - counts the length of the string 
// .value - targets the value
// .includes() - reads string 
// .match is a function syntax - .match(/[value]/)
//   - matches the string if it includes beterr option as you dont haveto 
// .write .includes many time and can just write all values at once