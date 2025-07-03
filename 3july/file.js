
function formvalidate(){

    let name = document.querySelector('#name').value
    let city = document.querySelector('#city').value
    let contact = document.querySelector('#contact').value
    let age = document.querySelector('#age').value

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
    

}


// isNaN - not a number
// length - counts the length
// value - targets the value