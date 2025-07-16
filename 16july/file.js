// modules
// different js files are js modules
// Es6 - modules
// two types of module
// .commom js
// Es6 module

// E6s module - import/export
// common js - we use modules.export for export and for import required()

// two types of importand export
// default and named
// 
//  default - when we have to export one single funtion or variable from one file
// - export - 
// export dafault (fn)

// import - 
// import (fn) from "filename.js"
// you can change name while importing of the function or variavle
// it works because in deafault we only export one fn or variable

// write moduele in script tag to enable modules or it does not work

// named-for ex/im of multiple fn or variavle from one file
// 







console.log('from main file')

// from default
import module1 from "./module1.js"

console.log(module1(10,20))

import demo from "./module1.js"  //demo works as changed name
console.log(demo(9,1))


// named
// import {add , sub} from "./module2.js"    
// add()
// sub()

import{add as sum , sub as fun} from "./module2.js"  // we have to make copy
// now it reads add as sum and dont respond when you call it by add or sub
// 
sum()
fun()