"use strict";
//stric type assignment
//a = 5;
let a = 5;
let b = 10; // ts implicitly assign b as "number"
// b = "abc"  - b is a number so we can't assign string
console.log(b);
// Strict Typing Lists
let arr = [1, 2, 3, 4];
// let arr1 : number[] = [1, 2, "a"]
let arr2 = [1, 2, 3, "str"]; // by default the data type is "any"
let arr3 = [42, 6, 1, 'a', "hello"];
let inputOperator = "add";
let newValue = 3;
let newValue2 = true;
// let newValue3 : values = "hello"
newValue = false;
var x = 234;
console.log(x.toString());
var car;
var obj = {
    year: 1999,
    model: "suv"
    // version: 5  - throws error if we add something
};
var obj2 = {
    year: 1992,
    model: "naked",
    speed: 150 //not throwing error
};
// Strong Typing a Function
function addTwo(first, second) {
    return first + second;
}
console.log(addTwo(5, 10));
function mulTwo(first, second) {
    return first * second + "";
}
console.log(mulTwo(5, 5));
var list1 = [5, "hello", true, 8];
var list2 = [8, "a", false]; // here last number is optional(?)
let num = [1, 2, 3, 4];
let arrOfNumArr = [[1, 2], [1, 4]];
// Generics in functions
// function getArray(items: any[]): any[] {
//   return new Array().concat(items)
// }
const lastElement = (arr) => {
    return arr[arr.length - 1];
};
var last = lastElement([1, 2, 3, 4]);
console.log("last ", last);
function ele(item) {
    return item[item.length - 1];
}
var le = ele([1, 2, 3]);
console.log("lastelement ", le);
var str = ele(["hello", "world", "joe", "john"]);
console.log(str);
const makeArray = (x, y) => {
    return [x, y];
};
console.log(makeArray(true, "true"));
const a3 = makeArray(null, '5'); // You can add unions while calling a function with generic type
console.log(a3);
/* Extension in generics -> Interfaces */
var makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
const f1 = makeFullName({
    firstName: "something",
    lastName: "sinclair",
    // age: 25,
    // We need to ensure that two fields exist for sure but other fields can also exist
});
;
var makeFullNameNew = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
const f2 = makeFullNameNew({
    firstName: "something",
    lastName: "sinclair",
    age: 25,
    random: true,
});
var value = {
    id: "hello",
    position: 4,
    data: 4,
};
let me;
me = {
    name: "ahs",
    hungry: true,
    hangry: true
};
