// let ar = ['nishant' , 45 , 8.4, 'pet']
// push() -- adds the element at last position in an array
// ar.push('india' , 'mp')
// console.log(ar)


// pop() -- subtracts the last element from the array
// ar.pop()
// console.log(ar)


// unshift()-- adds the element at first position in an array
// ar.unshift('virat' , 'kohli')
// console.log(ar)

// shift() --- subtracts the first element from the array
// ar.shift()
// console.log(ar)


// slice() -- it helps to store the value from between the array  to an 
// variable so you can perform any function using those values or delete
// remaing values , and it did not effect the original array
//  ( enter the indexing value from where you want to start , enter
//   the indexing value and add one to it upto where you want it to end)
// let ar1 = ar.slice(1 , 3)
// console.log(ar1)
// console.log(ar)


// ---------------------------------------------------------------------
// splice()  -- IT WILL ADD AND ALSO SUBTRACT 
// (ENTER THE INDEXING VALUE FROM WHERE YOU WANT TO SUBTRACT , ENTER THE
//   VALUE so it will delete that no. of element from that position.)
// IT WILL TAKE THE THOSE VALUES TO AN GIVEN VARIABLE AND ALSO AFFECT THE EXISTING
// ARRAY , IT WILL SUBTRACT THOSE VALUE FROM IT 
// FOR EX. GIVEN BELOW
// let ar2 = ar.splice(1 ,3)
// console.log(ar2)
// console.log(ar)

// ar.splice(2,0,'inisiis')  -- (THIS WILL ADD THE VALUE ON THE 2ND POSITION IN INDEXING)
// (ENTER THE VALUE TO WHERE YOU WANT TO ADD IT , ENTER 0 AS YOU DONT WANT TO 
// SUBTRACT ANYTHING FROM THE ARRAY , WRITE WHAT YOU WANT TO ADD THERE)
// ar.splice(2,0) -- (NOTHING WILL HAPPEN)
// ar.splice(2,1,'sir')
// console.log(ar)

// -------------------------------------------------------------------------------



// QUESTION
// let ar = [1,'nishant',3,'india']
// let ar1 = ar.slice(2,3)
// console.log(ar1)
// for(let n=1 ; n<=10 ; n++){
//     console.log(ar1*n)
// }

// let nt = [1,3,5,6,7,8,9,0,8,6,5]
// let n = parseInt(prompt("enter 1st number"))
// let a = parseInt(prompt("enter 2nd value"))
// nt.splice(n,a)
// console.log(nt)
