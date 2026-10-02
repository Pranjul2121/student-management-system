//Promises

//Async and await 

// function orderPlaced(){
//     console.log("Payment is in progress...");
//     setTimeout(()=>{
//         console.log("Payment successfully,your order has been placed")
//     },3000)
// }
// function orderPrepare(){
//     console.log("order preparation is starts..");
//     setTimeout(()=>{
//         console.log("Your order has been prepared")
//     },3000)
// }
// function readyForPickup(){
//     console.log("ready for pickup");
//     setTimeout(()=>{
//         console.log("order has been picked up")
//     },3000)
// }
// function orderDelivered(){
//     console.log("Order is Out for delivery...");
//     setTimeout(()=>{
//         console.log("Order has been delivered!")
//     },3000)
// }

// async function main(){
//     const response1=await orderPlaced();
//     const response2=await orderPrepare();
//     const response3=await readyForPickup();
//     const response4=await orderDelivered();
// }

// main();


// console.log("A");
// setTimeout(()=>{
// console.log("D")
// },4000)

// Promise.resolve().then(()=>{
//     console.log("F")
// })

// setTimeout(()=>{
//     console.log("C")
// },0)

// console.log("B");