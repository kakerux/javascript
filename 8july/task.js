let btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
    document.body.classList.toggle('dark')
    if(btn.textContent=='Dark'){
        btn.textContent='Light'
    }
    else if(btn.textContent=='Light'){
        btn.textContent='Dark'
    }
})