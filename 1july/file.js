let images = document.getElementById('images')
function fun(){
    images.src = "premium_vector-1722064602870-efaf81ab5837.avif"
}
function reset(){
    images.src = "/1july/premium_vector-1711987341462-25f4e92c9985.avif"
}

let list = document.getElementById('list')
let items = list.getElementsByTagName('li')
function loop(){
    for(let i=0 ; i<=9 ; i++){
       let value = parseInt(items[i].innerText)
       if(value%2===0){
        items[i].style.color='yellow'
       }
       else{
        items[i].style.color='red'
       }
    }
}
loop()