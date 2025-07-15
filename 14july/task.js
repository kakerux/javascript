let data = new Date()
let div = document.querySelector('#div')
let div1 = div.querySelector('#div1')
let head = div1.querySelector('#h1')
head.innerHTML=data.getDate()


let ar = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let day = data.getDay()

let head1 = div1.querySelector('#h2')
head1.innerHTML=ar[day]


let ar1 = ['january','february','may','june','july','august','september','october','november','december']
let month = data.getMonth()
let div2=div.querySelector('#div2')
let head2=div2.querySelector('#h3')
head2.innerHTML=ar1[month]