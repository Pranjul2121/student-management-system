//1.Order placed
//2.Order processed
//3.readyforPickup
//4.deliveryPart

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
// orderPlaced();
// orderPrepare();

//callback is used for the correct execution of the process

// function orderPlaced(callback){
//     console.log("Payment is in progress...");
//     setTimeout(()=>{
//         console.log("Payment successfully,your order has been placed")
//         callback();
//     },3000)
// }
// function orderPrepare(callback){
//     console.log("order preparation is starts..");
//     setTimeout(()=>{
//         console.log("Your order has been prepared")
//         callback();
//     },3000)
// }
// function readyForPickup(callback){
//     console.log("ready for pickup");
//     setTimeout(()=>{
//         console.log("order has been picked up")
//         callback();
//     },3000)
// }
// function orderDelivered(callback){
//     console.log("Order is Out for delivery...");
//     setTimeout(()=>{
//         console.log("Order has been delivered!")
//         callback();
//     },3000)
// }
// function khaLiya(){
//     console.log("Kha rha h !!")
//     setTimeout(()=>{
//         console.log("Kha liya h :)")
//     },3000)
// }
// orderPlaced(function(){
//     orderPrepare(function(){
//         readyForPickup(function(){
//             orderDelivered(function(){
//                 khaLiya();
//             });
//         });
//     });
// });