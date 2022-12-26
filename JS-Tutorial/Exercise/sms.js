// class sms {
//     constructor(message, sender, reciver, date, address){
//     this._message = message,
//     this._sender = sender,
//     this._reciver = reciver,
//     this._date = date,
//     this._address = address
//     }
//     send(){
//         console.log(`message sent to ${this._reciver}`);
//     }
//     recive(sender){
//         console.log(`Message recived from ${sender}`);
//     }
//     Delete() {
//         console.log("Message deleted successfully");
//     }
//     forwared(to){
//         console.log(`Message forwarded to ${to}`);
//     }

// }

// let sms1 = new sms("hello", "yidne", "Bisrat", "12/23/2022", "wolkite");

// console.log(sms1)
// console.log(sms1.send())

// sms1._phoneNumber = "0938536898"

// console.log(sms1)


// let circle = {
//     radius: 2,
// }
// circle.color = "blue"
// circle.draw = function () {};
// delete circle.draw
// console.log(circle)

// const mystring = new String("hello")
// const regular = "regular"
// console.log(mystring)
// console.log(regular[3])
// console.log(regular.length)
// console.log(mystring.length)
// console.log(mystring.includes("he"))

// let date = new Date();
// console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)


let myArray = new Array();
myArray.push(4, 4, 5, 6) // adding new element
console.log(myArray)
console.log(myArray.length)

console.log(myArray.slice(2)) // spliting the array

console.log(myArray.concat([1, 3, 4]))// concatinating the array

console.log(myArray.pop()) // removing an item
console.log(...myArray) // spread operator

console.log(myArray.join([1,2,3]))// joining an item to an array element 

console.log(myArray.map((el) => el)) // mapping an array element
console.log(myArray.filter())