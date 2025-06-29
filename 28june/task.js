let h2 = document.getElementById('head2')
h2.style.backgroundColor = 'yellow'
h2.style.color = 'red'



let h3 = document.getElementById('head3')
h3.style.color = "blue"
h3.style.backgroundColor = 'pink'

let image1 = document.getElementById('image1')
image1.src = 'premium_photo-1749668819550-43e7a3712a31.avif'
image1.style.borderRadius = '50%'
image1.style.marginTop = '20px'
image1.style.height = '200px'
image1.style.width = '200px'

let h1 = document.getElementById('head1')
h1.style.textTransform = 'uppercase'
h1.style.textAlign = 'center'

let p1 = document.getElementById('para1')
p1.style.fontSize = '30px'
p1.style.fontFamily = 'italics'

function toggledisplay() {

    if(!p1.style.display){
        p1.style.display='block'
    }
    if(p1.style.display=='block'){
        p1.style.display='none'
    }
    else if(p1.style.display=='none'){
        p1.style.display='block'
    }
}

function toggleimage() {
    let img = document.getElementById('image2')
    if(img.src.includes('28june/premium_photo-1749668819550-43e7a3712a31.avif')){
        img.src='lady.avif'
    }
    else if(img.src.includes('lady.avif')){
        img.src='premium_photo-1749668819550-43e7a3712a31.avif'
    }
    else{'invalid'}
}

function togglebg() {


    if(!document.body.style.backgroundColor){
        document.body.style.backgroundColor = 'white'
    }


    if(document.body.style.backgroundColor==='white'){
        document.body.style.backgroundColor ='red'

    }
    else if(document.body.style.backgroundColor==='red'){
        document.body.style.backgroundColor ='white'
    }
    
}


let btn = document.getElementById('btn')
btn.style.display = 'flex'
btn.style.flexDirection = 'row'

