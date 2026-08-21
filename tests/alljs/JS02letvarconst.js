//data types: types of data:
//number, boolean, string
//hoisting: accessing var before initialization

//var, let, const
//Var:duplicate vars allowed with var, allows hoisting-no errs,reassignment-not a problem
//let: re-declaration leading to duplicates not allowed,re-assignment allowed, hoisting allowed with an err at runtime
//const: declaration allowed BUT with initialization, re-assignment not allowed, re-declaration/duplication not allowed

//1. var: used in old JS -- never use it in modern JS/tools/PW
var x = 10;
var y = 20;
var x = 30;
console.log(x);

//Reassignment:
var y = 100;
y=200;
y=300;
console.log(y);

//3.Hoisting: calling of var/accessing var before declaration--and at that point says undefined
console.log(t);//undefined
var t = 90;
console.log(t);

//2.let:keyword
//Declaration:errs
let p = 10;
//let p = 20;
console.log(p);

//hoisting:is the feature of var
let a;
console.log(a);//undefined

//Reassignment:
let total = 900;
total = 970;
total = 1000;
console.log(total);//1000

//3.Hoisting is allowed but with err at RT
console.log(h);//undefined
let h = 11;

//3.const:
const PI = 3.14;
PI = 90.99;//Type error: assignment to constant variable
const LOGIN_TITLE = 'loginpage';
const DAYS_IN_WEEK = 7;
//title, url, days, month, PI, logo

let days = 7;//should be declared with const so re-assignment is not possible to avoid BUG
days = 20;
let salary = 100 * days;
console.log(salary);

const DAYS = 7;
let sal = 100 * days;
console.log(sal);

//duplicate not allowed
const tr = 100;
//const tr = 200;

//const pi; //error since no initialization
const pi = 3.14;

//never use var and let together:
var r = 20;
let r = 10;//errs two identifier: identifier already been taken


