//  let head = document.getElementById('head')

// function fun(){
//     // let head = document.getElementById('head')
//     head.textContent = "Get Lost"
//     head.style.color = 'red'
// }
// function task(){
//     head.textContent = 'Hellow'
//     head.style.color = 'black'

// }

// the value comes in 'a' as attribute and while the function is same for all 
// and runs for all function values cuz task is same 
// function same chalega value alag hai to alag kaam karega
let head1 = document.getElementById('head1')
// function red(a){
//     document.body.style.backgroundColor=a
//     head1.textContent=a
// }
// function green(){
//     document.body.style.backgroundColor="green"
//     head1.textContent='Green'
// }
// function yellow(){
//     document.body.style.backgroundColor="yellow"
//     head1.textContent='Yellow'
// }

function color(a){
    document.body.style.backgroundColor=a
    head1.textContent=a
}



// make a counter 
// 0 -> -,+   click on plus it plus and vice versa

let head2 = document.getElementById('head2')
function sub(){
    head2.innerHTML = parseInt(head2.innerHTML)-1


   if(head2.innerHTML%2==0){
    head2.style.color="yellow"
   }
   else if(head2.innerHTML%2!==0){
    head2.style.color="black"
   }


}
function add(){
    head2.innerHTML = parseInt(head2.innerHTML)+1


    if(head2.innerHTML%2==0){
    head2.style.color="yellow"
   }
   else if(head2.innerHTML%2!==0){
    head2.style.color="black"
   }
    
}
