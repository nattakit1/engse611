let a=1;
let b=2.3;

console.log(a);
console.log(typeof b,b);
b=8;
console.log(typeof b,b);
b="Test";
console.log(typeof b,b);


//----------------------------

// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3

let num1 =1.2;
let str ='514';
console.log(num1, typeof num1);
console.log(str, typeof str);

console.log(parseInt(str), typeof parseInt(str));
console.log(num1,toString(),typeof num1.toString());
