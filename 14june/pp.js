// var r = 4
// console.log(r*r)


// let r = 5
// r = 6
// console.log(r*r)


// var a = parseInt(prompt("enter a value"))

// var b = parseInt(prompt("enter 2nd value"))

// console.log(a+b)



var a = parseInt(prompt("enter a value"))
var b = parseInt(prompt("enter 2nd value"))
var operator = prompt("select an operator = + , - , * , /")
var result
if(operator == '+'){
    result = a+b 
}
else if(operator == '-'){
    result = a-b
}
else if(operator == '*'){
    result = a*b
}
else if(operator == '/'){
    if(b!==0){
        result = a/b
    }
    else{
        result = "invalid"
    }
}
else{
    result = "its invalid "
}
console.log("result :",result)

