// var r = 4
// document.write(r*r)


// let r = 5
// r = 6
// console.log(r*r)


// var a = parseInt(prompt("enter a value"))

// var b = parseInt(prompt("enter 2nd value"))

// console.log(a+b)



// var a = parseInt(prompt("enter a value"))
// var b = parseInt(prompt("enter 2nd value"))
// var operator = prompt("select an operator = + , - , * , /")
// var result
// if(operator == '+'){
//     result = a+b 
// }
// else if(operator == '-'){
//     result = a-b
// }
// else if(operator == '*'){
//     result = a*b
// }
// else if(operator == '/'){
//     if(b!==0){
//         result = a/b
//     }
//     else{
//         result = "invalid"
//     }
// }
// else{
//     result = "its invalid "
// }
// console.log("result :",result)



// SHOWS IN CONSOLE
// var a = prompt("Enter the number : ")
// if(a>0){
//     console.log("positive")
// }
// else if(a<0){
//     console.log("negative")
// }
// else if(a==0){
//     console.log("zero")
// }
// else{console.log("invalid")}


// SHOWS IN THE PAGE OR Document
// var a = prompt("Enter the number : ")
// if(a>0){
//     document.write("positive")
// }
// else if(a<0){
//     document.write("negative")
// }
// else if(a==0){
//    document.write("zero")
// }
// else{document.write("invalid")}


//HOLLOW SQUARE USING STAR*
// for(let r=1 ; r<=5 ; r++){
//     for(let c=1 ; c<=5 ;c++){
//         if(r==1 || r==5 || c==1 || c==5){
//             document.write('*')
//         }
//         else{document.write("&nbsp&nbsp")}
//     }
//     document.write("<br>")
// }




// PRINTING X/CROSS WITH STARS 
// for(let r =1 ; r<=5 ; r++){
//     for(let c =1 ; c<=5 ; c++){
//         if((r==1&&(c==5||c==1)) || (r==2&&(c==2||c==4)) || (r==3&&c==3) || (r==4&&(c==2||c==4)) || (r==5&&(c==1||c==5))){
//             document.write('*')
//         }
//         else{document.write('&nbsp&nbsp')}
    
//     }
//     document.write('<br>')
    
// }