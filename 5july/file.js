function sun(){
    let button = document.getElementById('button')

    if(!(document.body.style.backgroundColor=='white')){
        document.body.style.backgroundColor='white'

    }
   else if(document.body.style.backgroundColor=='white'){
        document.body.style.backgroundColor='black'
        

    }
    else if(document.body.style.backgroundColor=='black'){
        document.body.style.backgroundColor='white'
        button.style.backgroundColor='black'

    }
    
}

let div = document.getElementById('chair')
let chair = div.getElementsByTagName('i')
for(let i=0;i<=5;i++){
chair[i].style.padding='20px'
chair[i].style.border='solid,black,2px'
chair[i].style.backgroundColor='black'
chair[i].style.color='red'
chair[i].style.borderRadius='50%'

}

function fun(){
for(let i=0;i<=5;i++){  
if(chair[i].style.backgroundColor=='black'){
    chair[i].style.backgroundColor='red'
}
else if(chair[i].style.color=='red'){
    chair[i].style.color='black'
}
}
}