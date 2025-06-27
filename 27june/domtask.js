// target h1 change text with underline
// h2 text change with italics
// h3 text change
let a = document.getElementById('head1')
a.innerHTML = '<u>underline using text</u>'
// console.log(a)  or c.l(head1) befor variable thing---  prints whole h1

let b  = document.getElementsByClassName('head2')
b[0].innerHTML = '<i>inner italics </i>'

let c = document.getElementsByTagName('h3')
c[0].textContent = 'its in heading 3'

// let d = document.getElementsByTagName('h3')
c[1].textContent = 'its in heading 3 fgasgagtdsagasgfg'

document.getElementById('head4').textContent = 'from this side'

function fun(a){
    console.log(a+a)
}
fun(8)
let q = fun(8)
console.log(q)