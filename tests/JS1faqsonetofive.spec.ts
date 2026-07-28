

import {test, expect} from '@playwright/test';

test('faq1:rev a string', async ({})=>{

    //original string
const s = 'selenium';

//Method 1: using a loop to reverse the str
let rev = '';
for(let i = s.length-1; i>=0;i--){
    rev+= s.charAt(i);
}
console.log(rev);

//Method 2: using a built in fn
const reversed = s.split('').reverse().join('');
console.log(reversed);

})

test('faq2:remove junk', async ({})=>{

    const s = '!@$%^*9 0 clock*&^%=';

    //use regular expression to remove all chars that are NOT a-z, A-Z, or 0-9
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '');

    console.log(cleanedString);
})

test('faq3: reverse an integer', async ({})=>{
    //Method 1: Reversing a number mathematically
    let num = 12345;
    let rev = 0;

    while(num!==0){
        rev = rev *10 + (num % 10);
        num = Math.floor(num/10);
    }
    console.log('reverse of num: ', rev);

    //Method 2: Using string methods
    const l1 = 123456;
    const revString = l1.toString().split('').reverse().join('');
    console.log(revString);
})

test('faq4: Missing num from array', async ({})=>{
    //Array of numbers
    const a = [1, 2, 4, 5];

    //Sum of array elements
    let sum = 0;
    for (let i=0; i<a.length; i++){
        sum+= a[i];
    }
    console.log(sum);

    //sum of sequence from 0 to 5
    let sum1 = 0;
    for(let j = 1; j<=5; j++){
        sum1+= j;
    }
    console.log(sum1);

    //Missing number (diff between total sequence sum and array sum)
    console.log('missing num:', sum1 - sum);
})

test('faq5: missing ele of strings array', async ({})=>{

    const names = ["java", "java script", "ruby", "C", "python", "java", "C"];

    //1. Comparing adjacent eles (inefficient, O(n^2))
    console.log("duplicates by comparing adjacent elements:");
    for(let i=0; i<names.length; i++){
        for(let j=i+1; j<names.length; j++){
            if(names[i] === names[j]){
                console.log("duplicate ele: ", names[i]);
            }
        }
    }
    console.log('-----------------------------------');

    //2. Using Set to find duplicates(efficient, O(n))
    const storeSet = new Set();
    console.log("duplicates using Set:");

    for(const e of names){
        if(storeSet.has(e)){
            console.log("duplicate::", e);
        }
        else{
            storeSet.add(e);
        }
    }
    console.log('-------------------------------------');

    //3. Using Map to count occurrence(to detect duplicates)
    const storeMap = new Map();
    for(const n of names){
        if(storeMap.has(n)){
            storeMap.set(n, storeMap.get(n)+1);
        }else{
            storeMap.set(n, 1);
        }
    }
    //Pring duplicates based on count > 1
    console.log("duplicates using Map:");
    for(const [key, count] of storeMap.entries()){
        if(count > 1){
            console.log("duplicate ele is", key);
        }
    }

})