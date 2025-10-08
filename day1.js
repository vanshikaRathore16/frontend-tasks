// varialbles---------------------------------------------------------------------------------------
var a = "hello world"
console.log(a);
let b = "hello let"
console.log(b);
const c = "hello const";
console.log(c);

// data types------------------------------------------------------------------------------------
// Primitive Data Types
//number
let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

//String
let s1 = "Hello There";
console.log(s1); 

//Boolean
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

// null
let age = null;
console.log(age)

// Undefined
let un ;
console.log(a);
// not Primitive Data Types

// object
let object = {name : "vanshika" , age : 22}

// array
let arr = [1,2,3]

// funcation 
function greate(name){
    return name;
}

//Operators-------------------------------------------------------------------------------------
//JavaScript Arithmetic Operators
const sum = 5+3;
const diff = 5-3;
const p = 4*5;
const q = 2/5;

// JavaScript Assignment Operators
let n = 10;
n += 5;
n *= 2;
console.log(n);

//JavaScript Comparison Operators
console.log(10 > 5);
console.log(10 === "10");

//JavaScript Logical Operators
const a1 = true, bb = false;
console.log(a1 && bb); 
console.log(a || b); 

// JavaScript Ternary Operator
const age1 = 18;
const status = age >= 18 ? true : false;

// JavaScript Chaining Operator (?.)
//  const obj1 = {name : vanshika , address :{city : ujjain}};
//  console.log(obj1.address?.city);

 // Conditional Statements 
 //if 
 if(10 > 0){
    console.log(true);
 }

 //if-else
    if(10 > 0){
    console.log(true);
 }else{
    console.log(false)
 }

 //if else if
  if(10 > 0){
    console.log(true);
 }else if(10 < 6){
    console.log(false)
 }else{
    console.log("else")
 }

 //switch
 let x= 2;
 switch(2){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("three")
 }

 //loops---------------------------------------------------------------------------------------
// for
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}
// for in
const person = { name: "Alice", age: 22, city: "Delhi" };
for(let key in person){
    console.log(key ," : " ,person[key])
}

// for of 
const arr2 = [1,2,3,4];
for(let index of arr2){
    console.log(index);
}

// while loop
while(1 > 10){
    console.log(i);
    i++;
}

// do while
do{
//    console.log(i);
//    i++;
}while(1 > 3)

//funcation------------------------------------------------------------------------------------

function greet(name){ // parameter
    console.log(name)
}
greet("vanshika") // argument

//Type of Functions
// named funcation
function greet1(){
    console.log("hello world");
}
//Anonymous Function
const greet3 = function(){
    console.log("hello js");
}
// funcation expression
const add = function(a,b){
    console.log(a+b);
}
// arrow 
let s = n=> n*n;
// Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("js");
})();
//callback funcation
function num(n,callback){
    console.log("main");
    callback();
}
//Higher-Order Function

//Objects in JavaScript------------------------------------------------------------------------
//Creation Using Object Literal
//Creation Using new Object() Constructor
