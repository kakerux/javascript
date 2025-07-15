function storedata(){
    let userdata = {
        name:document.querySelector('#name').value,
        contact:document.querySelector('#contact').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#pass').value,
    }
    localStorage.setItem('signdata',JSON.stringify(userdata))
}
