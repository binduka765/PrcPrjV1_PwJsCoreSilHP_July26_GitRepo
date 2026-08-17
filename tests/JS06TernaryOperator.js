

//ternary operator: written with ? and a colon
//? :
//after question -- two parts
//if condition true: executes  part 1 
//if condition false: executes part 2

let num = 10;

let bill = num >=15 ? 100 :200;
console.log(bill);

let age = 10;
//age>=18: eligible for voting
//age<18: not eligible for voting

let isEligible = age >=18 ? 'eligible for voting' : 'not eligible for voting';
console.log(isEligible);

//can we true/false in switch case statement?
//avoid to use conditions with the switch cases
// let number = 90;

// switch (true) {
//     case true:
//         console.log('hi');
//         break;

//          case false:
//         console.log('hi');
//         break;

//     default:
//         break;
// }

