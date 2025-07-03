// function fun(){

// let val = document.querySelector('#num1').value
// alert(val)

// }
function fun(){

let val = parseInt(document.querySelector('#num1').value)
let val1 = parseInt(document.querySelector('#num2').value)
document.querySelector('#answer').textContent=val+val1

return false

}


