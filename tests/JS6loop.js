
//code from half of this session -- need to append the previous code in future
let j=1;
while (j<=50){
    console.log(j);
    if(j%5 == 0){
        console.log('hello');
        break;
    }
    j++;
}
console.log(j);
console.log('------for loop------');
 
for (let p=1; p<=10; p++){
    console.log(p);
}

for(let m=10; m>=0; m--){
    console.log(m);
}
//infinite loop: bug
// for(let n=1; true; n++){
//     console.log('hello BinAutoGp');
// }

//1 to 10: right syntax allowed
// let n = 1;
// for(; n<=10; n++){
//     console.log('hello BAgp');
// }

//print 1 to 10: right syntax allowed
let n = 1;
for(; n<=10;){
    console.log(n);
    n++;
}
console.log('-------------');
//by default the second param is taken as true: infinite loop BUG:can be stoppped with break; statement
for(; true ;){
    console.log('welcome to taj');
    break;
}

console.log('----3:DO-While loop---');
//first start, execute the statement once - then check the loop, only if condition satisfied then execute
//body of loop inside do block
let k=1;
do{
    console.log(k);
    k++;
}
while(k<=10);

//prints 2 to 11
let h=1;
do{
    h++;
    console.log(h);
}
while(h<=10);

//use cases of while:loop
//when no of iterations- NOT FIXED
//1.wait for element on the page: 0 2 5 10
//2.wait for page loading: 2 5 10
//3.calendar: march 2027-future calendar
//4.web table pagination
//5.infinite scrolling: linkedin, insta, fb

//use cases of for loop: when no of iterations FIXED
//drop down: month, days, fixed/static arrays,

//use cases of do-while loop: if execution needed only once before the condition(no need to chk the condition)
//1. ele is already present on the page...click on the ele --- break it


//ADVANCED LOOPS:
//for each
//for in
//for of

