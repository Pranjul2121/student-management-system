// function test(){
//     var a="hi";
//     if(true){
//         let b="hello";
//         console.log(b);
//     }
//     console.log(a);
// }
// test();

// const a=5;
// a=6;
// console.log(a);

// let a=5;
// a=11;
// console.log(a);

// let c=20;
// let c=30;
// console.Log(c);

// var d=20;
// var d=50;
// console.log(d);


// console.log("hello world");
// console.log("Hello World");

// function greet(name){
//     console.log(`Hello ${name} good morning`);
// }
// greet("raj");

// function sum(a,b){
//     return a+b;
// }

// (function(x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(1);

// setTimeout(function(){
//     console.log("hello world")},3000);

// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }



for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}