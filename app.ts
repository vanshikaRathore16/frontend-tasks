// let message1 : string = "Hello TypeScript";
// console.log(message);

// function greet1(name : string) : string{
//     return `greeting, ${name}`
// }
// console.log(greet("alice"))

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);

// let day : number = 0;
// if(day <= 0 || day >= 7) {
//     day = Number.NaN;
//    console.log(`day is ${day}`)
// }else{
//     console.log(day);
// }

// let mul = `hello \n` + 
// `geeks for geks`;
// console.log(mul);

// type Pet = "mouse" | "dog" | "rabbit"
// let pet : Pet;
// if(pet ="mouse"){
//     console.log("correct")
// };
// // if(pet = "deer"){
// //     console.log("wrong")
// // };

// interface User{
//     name : string,
//     email : String
// }

// const newUser : User ={
//     name : "vanshika",
//      email : "vanshika@gmail.com"
// }
// console.log(newUser);

// // create object
// // 1 Object Literals
// // Constructor Method
// function Emp(firstName : string,lastName :  string,age : number){
//     this.FN = firstName;
//     this.ls = lastName;
//     this.age = age;
// }

// let p1 = new Emp("ravi","pal",23);
// console.log(p1.FN + " " + p1.ls + " " + p1.age);

// function add(a: number,b : number) : number{
//     return a+b
// }
// console.log(add(5,5));

// function getNameStrng(a : number,b : number) : string{
//          return (a+b).toString();
// }
// console.log(getNameStrng(1,2));

// function goodMoening(name? : string) : string{
//     let variable = (name ? `${name}` : `${""}`);
//     return variable;
// }

// console.log(goodMoening("vanshika"));
// console.log(goodMoening());

// function sum(...num : number[]) : number{
//     return num.reduce((acc,val)=>acc + val,0);
// } 
// console.log(sum(1,2));

// class Data
// {  
//     public displayData(data: string): number;  
//     public displayData(data: number): string;  
//     public displayData(data : any): any   
//     {  
//         if (typeof(data) === 'number')  
//             return data.toString();  
//         if (typeof(data) === 'string')  
//             return data.length;  
//     }  
// }  

// let object = new Data();  
// console.log("Result is : " + object.displayData(123456));
// let stringData = "GeeksforGeeks";  
// console.log("Length of String " +  stringData 
//     + " is : " + object.displayData(stringData));

// let something1 ;
// let anything ;
// console.log('type of anything',typeof(anything));
// console.log('type of something',typeof(something1));


// let arr : number[] = [1,2,3,4,5];
// console.log(arr);

// let person : [string,number] = ["vanshika",24];
// console.log(person);

// interface user{
//     x: number,
//     y : number
// }

// // arrow function

// // let add =  (a : number,b : number)=> number = function(a,b){
// //     return a+b;
// // }

// let multiply = (a : number,b : number) : number => a * b;
// console.log(multiply(1,2));

// // enum statusCode{
// //     ok = "200",
// //     badRequest = "400",
// //     notFound = "204"
// // }

// // console.log(statusCode.ok);

// // function greet1() : never{
// //           while(true){
// //             console.log("hello");
// //           }
// // }

// // let varible :   string | number;
// // varible = 123;
// // varible = "typeScript"
// // console.log(`string`,varible);
// // console.log(varible);

// // enum user1{
// //     name,
// //     age
// // }
// // console.log(user1.name)

