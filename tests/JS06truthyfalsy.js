
//8 different types of truthy/ falsy values:
//false=0,-0, 0n, "",null, undefined,NaN
//truthy=1,any positive num other than 0,negative num, 5n, any str other than blank str,any empty array:[], any empty obj:{},
//new Date(), Infinity, -Infinity, Any function -- function(){}, any space-" "

console.log('---testing falsy----');
if(false){
    console.log('hi');//nothing is printed
}
else{
    console.log('hello')
}

console.log('---testing truthy----');
if(0){
    console.log('hi');
}
else{
    console.log('hello')
}

