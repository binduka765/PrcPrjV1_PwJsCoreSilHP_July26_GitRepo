//data types: types of data:
//all vars stored on RAM: read access memory
//shud be declared using reserved keywords or identifiers-[let, var, const]--at RT will be decided the type of it

//1.primitive data types:simple | stack | not part of obj/ref | fixed memory | No garbage collector
//2. non-primitive data types: object/References/Class/Arrays/Functions/Interfaces | dynamic memory | heap memory


//primitive data types:number, string, boolean, BigInt,
//1.number:
//size: 1 byte = 8 bits
//range:find it using maxsafeInt or minsafeInt is 9007199254740991 to -9007199254740991

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let i = 10;
console.log(i);
console.log(typeof (i)); //number

let j = 12.33;
console.log(j);
console.log(typeof (j));//number

const PI = 3.14;
console.log(typeof PI);

//1 byte = 8 bits
//size: 8 bytes = 64 bits

//2. string: '' or ""
//size: 2 bytes per character
let name = "Testing";
let firstName = 'Bindu';

let gender = 'f';
let isExec = 'y';
let ph = 9086753241;

console.log(firstName);
console.log(typeof firstName);
console.log(typeof gender);
//console,length(typeof ph);

let productName = 'MacBook Pro';
console.log(productName);

let e = 'abc'; //3x2 = 6 bytes of memory
console.log('my first name is: '+firstName);

//3.boolean: true or false
//size: ~1 byte = 8 bits
let flag = true;
console.log(flag);
let isEmpActive = false;
console.log(isEmpActive);
console.log(typeof flag);

let rest = 'true';
console.log(typeof rest);

console.log('----------------');

let num = 9007199254740993;//3 dot warning => exceeding the range of number data type
let num1 = num + 1;
console.log(num1);//9007199254740992

//4.BigInt: ends with an n
let amt = 9007199254740993n //big integer
console.log(typeof amt);//bigint

let te = 10n;
console.log(te);
console.log(typeof te);//bigint

//calculation cannot be done between two diff data types
let x = 10;//number
let y = 20n;//bigint
//console.log(x+y); //cannot mix BigInt and other data type-errs

let pop = BigInt(100);
console.log(pop); //100n -- bigInt
console.log(typeof pop);//bigint

console.log(pop/2n);//50n




