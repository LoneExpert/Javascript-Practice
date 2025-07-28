const name = "Aryan Shubbu";

console.log(name);

function Hi(a){
    return `Hello! ${a}`;
}

console.log(Hi("Aryan"));

let num = [1,2,3];
num.push(4);
console.log(num);

// Immutable and Mutable
// Immutable with array
let a = 10;
let b = a;
b=20;
console.log(a);
// Immutable with obj
// const only stop reassigining not the editing inside it
const obj = {
    name: "Aryan Shubbu",
    age: 23
}
obj.name = "Aryan";
obj.age = 24;
console.log(obj);

// mutable
let arr = [1,2,3];
let newarr = arr;
newarr.push(4);
console.log(arr);
// -------------------------------------------

// Pass by Value vs Pass by Reference


