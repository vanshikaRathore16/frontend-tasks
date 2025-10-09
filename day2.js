let arr = [1,2,3,4,5,6,7,8,9,10];
let arr1 = [1,2,3,4,5,6,7,8,9,10];

// Searching / Finding Elements
console.log(arr.indexOf(2));  // returns index if found else -1

// Objects
let obj = {name : "vanshika", city : "ujjain"};
console.log(obj);

let obj2 = new Object({name : "vanshika", city : "indore"});
console.log(obj2);

// constructor function
function obj10(name, person){
    this.name = name;
    this.person = person;
    this.greet = function(){
        console.log("hello");
    }
}
let person = new obj10("atul", "indore");

// class
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`hello ${this.name}, ${this.age}`);
    }
}

let obj4 = new Person("vanshika", 24);
Object.assign(obj4, {name: "atul", age: 20, city: "harda"}); // overwrite properties
obj4.greet();

// let/const scope example
let n = 10;
n = 15;
{
    let n = 2;
    console.log(n); // 2
}
console.log(n); // 15

const ph = 1234;
// ph = 2345; // error: const can't be reassigned

// normal and arrow functions
function add(a, b){
    return a + b;
}
const AF = (a, b) => a + b;

// Destructuring
let obj5 = {
    name: "vanshika",
    age: "22"
};
const {name, age} = obj5;
console.log(name, age);

// spread operator
let arr2 = [1,2,3,4];
let arr3 = [...arr2, 1,2,3];
console.log(arr3);

let arr4 = [1,2,3,4,5,6,7];
const arr5 = [...arr4];
console.log(arr5); // copy of arr4

// higher order function
function fun(){
    console.log("HOF");
}
function fun2(action){
    action();
}
fun2(fun);

// map, filter, reduce
const n1 = [1,2,3,4,5];

const n2 = n1.map(num => num * 2);
console.log(n2);

const n3 = n1.filter(item => item > 2);
console.log(n3);

const n4 = n1.reduce((sum, item) => sum + item, 0);
console.log(n4);

// callback example
function fun5(name, callback){
    callback();
    console.log(name);
}
function fun6(){
    console.log("callback");
}
fun5("para", fun6);

// promise
let checkEven = new Promise((resolve, reject) => {
    let i = 2;
    if(i % 2 === 0) resolve("the number is even");
    else reject("the number is odd");
});

checkEven
    .then(msg => console.log("promise solved:", msg))
    .catch(err => console.log(err));

// promise.race
Promise.race([
    Promise.resolve("task 1 complete"),
    Promise.reject("task 3 rejected"),
    Promise.resolve("task 2 complete")
])
.then(msg => console.log("resolve:", msg))
.catch(err => console.log("reject:", err));

// async/await
const getData = async () => {
    let y = await "async";
    console.log(y);
}
getData();

// merging arrays without duplicates
let arr6 = [1,2,3,4];
let arr7 = [4,5,6];
for(let i = 0; i < arr6.length; i++){
    if(arr7.indexOf(arr6[i]) === -1){
        arr7.push(arr6[i]);
    }
}
console.log(arr7);

// try/catch
function evenNumber(num){
    try {
        if(num === 2){
            console.log("try");
        } else {
            throw new Error("not 2");
        }
    } catch(err){
        console.log(err.message);
    }
}
evenNumber(5);

// setTimeout and setInterval
// setTimeout(() => {
//     console.log("setTimeout");
// }, 2000);

// setInterval(() => {
//     console.log("setInterval");
// }, 2000);

// promise with resolve & reject
let str = "promise is resolve";
let promise = new Promise((resolve, reject) => {
    resolve(str);
    setTimeout(() => {
        reject("promise is rejected");
    }, 1000);
});
promise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

// class again
class Person2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    g(){
        console.log(`hello ${this.name} ${this.age}`);
    }
}
const person2 = new Person2("pranjal", 20);
person2.g();
