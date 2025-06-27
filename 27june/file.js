// DOM  - - DOCUMENT OBJECT MODEL
// BY JAVASCIPT FILE YOU CAN MAKE CHANGES IN HTML
// CHANG3S IN DOM IN HTML ELEMENTS (TAGS) ARE CALLED NODE


// getElementById target only one element
let a = document.getElementById('head1')
// console.log(head1)
console.log(a)

// text change
a.textContent = 'inside js'


// innerHTML change the element and also add any new element if you want
let b = document.getElementById('head2')
b.innerHTML = "<i> cloud </i>"


// getelementsby class name and tag name, targets multiple elemts and return as node - [array]

let c = document.getElementsByClassName('head3')
c[0].textContent = "change with js"
// we use indexing to make changes

let h = document.getElementsByTagName('h2')
console.log(h)
h[0].textContent = "change with tags"




