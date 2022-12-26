// conditional operator

// if else
let hour = 10;

if(hour > 6 && hour < 18){
    console.log("good afternoon")
}else if (hour < 6 && hour < 12){
    console.log("good morning")
}else{
    console.log("good evening")
}

// switch case

let role = "gust";

switch (role) {
    case "gust":
        console.log(role)
        break;
    default:
        break;
}

//loops

// for (let x=0; x < 5; x++){
//     console.log("Hello World")
// }

// let x = 0;
// while(x < 5){
//     console.log("Hello World")
//     x++;
// }

const cities = {
    a: "Addis Ababa",
    b: "hawasa",
    d: "Wolkite",
    e: "Jimma"
}

for (city in cities){
    console.log(cities[city])
}

let values = cities.values
console.log(values)
for (let i=0; i < cities.values; i++){
    console.log(cities.values[i])
}

const arr = ["banana", "fdsf", "fsdfds"];

for (let i of arr){
    console.log(i)
}

const m = new Map();
m.set(1, "black")
m.set(2, "red")

for (let n of m ){
    console.log(n)
}

const s = new Set();

s.add(1);
s.add("red");
s.add(1);
s.add(1);

for (let n in s){
    console.log(n)
}