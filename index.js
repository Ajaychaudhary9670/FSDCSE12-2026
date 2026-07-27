// // index.js

// console.log("Hello, JavaScript!");

// let name = "Ajay";
// let age = 20;

// console.log("Name:", name);
// console.log("Age:", age);

// // Function
// function greet(name) {
//     return `Hello, ${name}! Welcome to JavaScript.`;
// }

// console.log(greet(name));

// var a = 34;
// if (a > 10) {
//     var a = 40;
//     console.log("hi a inside the block :" + a);
// }
// console.log("hey.. a is now outside the block :" + a)

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))

// const sum = (a, b) => { return a + b };
// console.log(sum(22, 394))
// const data = function (msg) {
//     return "hello, i am using js" + msg
// }
// data("and Node")

// (() => { console.log("Hey..using and calling by IIFE") })();

//callback function

// function sum (a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//     const result= clbk(2,6);
//     console.log("hey,your result = "+result+"!! well done"+msg)
// }
// sumWithMsg(sum," ajay")

// function login(msg, error) {
//     if (error) {
//         console.log("error is " + error)
//     } else {
//         console.log(msg)
//     }

// }
// function loginHandler(username, password, clbk) {
//     if (username == "ptomer40" && password == "12345") {
//         clbk("success", null);
//     } else {
//         clbk(null, "username or password is incorrect")
//     }
// }
// loginHandler("ptomer", "12345", login)

function login(msg, error) {
    if (error) {
        console.log("error is " + error);
    } else {
        console.log(msg);
    }
}

function loginHandler(username, password, clbk) {
    if (username == "ptomer40" && password == "12345") {
        clbk("success", null);
    } else {
        clbk(null, "username or password is incorrect");
    }
}

loginHandler("ptomer40", "12345", login);