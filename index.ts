//stric type assignment
//a = 5;

let a: number = 5

let b = 10  // ts implicitly assign b as "number"

// b = "abc"  - b is a number so we can't assign string

console.log(b)

// Strict Typing Lists

let arr: number[] = [1, 2, 3, 4]
// let arr1 : number[] = [1, 2, "a"]
let arr2 = [1, 2, 3, "str"]  // by default the data type is "any"
let arr3: any = [42, 6 ,1 , 'a', "hello"]

// Custom Types
// "type" allows us to perfor unions and ORs
type operator = "sub" | "add" | "mul";

let inputOperator : operator = "add"
//let inputOperator : operator = "div" -> error

type values = number | boolean  // union of 2 types

let newValue : values = 3
let newValue2 : values = true

// let newValue3 : values = "hello"

newValue = false

var x : number = 234
console.log(x.toString())

// Custom Types for Objects

interface Car{
    year: number,
    model: string,
}

var car : Car;

var obj : Car = {
    year: 1999,
    model:"suv"
   // version: 5  - throws error if we add something
}


interface Bike {
  year: number;
  model: string;
  [key: string]: any; // This would give me capability to add extra key value pairs to my object
}

var obj2 : Bike= {
    year: 1992,
    model: "naked",
    speed: 150     //not throwing error
}


// Strong Typing a Function

function addTwo(first: number, second:number) {   //default return type is any
    return first+second;
}

console.log(addTwo(5, 10))

function mulTwo(first: number, second:number): string //return type
{
    return first*second +"";
}

console.log(mulTwo(5, 5))

/* TypeScript has Tuples */
// A tuple is a fixed length list with datatype of each element predefined

type myTuple = [number, string, boolean, number?]; // ? -> Makes an element optional

var list1 : myTuple = [5, "hello", true, 8];
var list2 : myTuple = [8, "a", false] // here last number is optional(?)

// var list3: myTuple = [9, 2, "val"]  -> error

// var list4 : myTuple = []  -> error


/* Generics in Typescript */

type numArray = Array<number>;  // angle brackets contains the generics

let num : numArray = [1, 2, 3, 4]


type arrOfArr = Array<number[]>;
let arrOfNumArr : arrOfArr = [[1, 2], [1, 4]]


// Generics in functions

// function getArray(items: any[]): any[] {
//   return new Array().concat(items)
// }


const lastElement = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};

var last = lastElement([1, 2, 3, 4])
console.log("last ", last)

function ele<T>(item : Array<T>){
    return item[item.length-1]
}

var le = ele([1, 2, 3])
 console.log("lastelement ",le)

var str = ele (["hello", "world", "joe", "john"])
console.log(str)


const makeArray = <X = boolean, Y = string>(x: X, y: Y) => {
  return [x, y];
};

console.log(makeArray(true, "true"))

const a3 = makeArray<string | null>(null, '5'); // You can add unions while calling a function with generic type
console.log(a3)



/* Extension in generics -> Interfaces */

var makeFullName = (obj: {
  firstName: string;
  lastName: string;
}) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}

const f1 = makeFullName({
  firstName: "something",
  lastName: "sinclair",
  // age: 25,
  // We need to ensure that two fields exist for sure but other fields can also exist
});

interface basics {
  firstName: string;
  lastName: string;
};



var makeFullNameNew = <
  T extends {
    firstName: string;
    lastName: string;
  }
>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const f2 = makeFullNameNew({
  firstName: "something",
  lastName: "sinclair",
  age: 25,
  random: true,
});


// Generics with Interfaces
interface Tablet<T> {
  id: string;
  position: number;
  data: T
}

type numberTablet = Tablet<number>;


var value: numberTablet = {
  id: "hello",
  position: 4,
  data: 4,
};

/*
var value : Tablet<number> = {   // works too
    id:"hello",
    position:4,
    data: 4
}
*/

// Debatable feature of interfaces
interface Person {
  name: string;
  hungry: boolean;
}

interface Person {
  hangry: boolean
}

// Interface declaration merging in TS

type personType = Person;
let me: personType;

me = {
    name: "ahs",
    hungry: true, 
    hangry: true
}