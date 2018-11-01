// 1---->stringReversal.js

let reverse=(str)=>[...str].reverse().join(''); //spread operator to spread the given input string into an array
console.log(reverse('hello'));


// 2---->palindrome.js
function palindromecheck(str)
{
    let mystr =str ;
    let reverse=[...mystr].reverse().join('');
    (reverse===mystr)?  //ternary operator '?' used for if condition
        alert('Palindrome') :
        alert('not palindrome');
}
palindromecheck("eye");


// 3---->Reverse given number
function numReverse(n)
{
	n = n + ""; //convert num to string, can also write "str = n.toString();"
	return n.split("").reverse().join("");
}
console.log(numReverse(456));


// 4---->Uppercase first letter of each word
function capitalize(str) 
{
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) 
    {
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}  
console.log(capitalize('hi pooja! how are you?'));


// 5---->maximum occurrence of a string in given word
function maxString(str)
{
    let mystr =[...str];
    let frequency = {};  // array of frequency
    let max = 0;  // holds max frequency
    let result;   // holds max frequency element
    for(let v in mystr) 
    {
        frequency[mystr[v]]=(frequency[mystr[v]] || 0)+1; // increment frequency
        if(frequency[mystr[v]] > max) // is this frequency > max so far?
        { 
                max = frequency[mystr[v]];  
                result = mystr[v];          
        } 
    }
    return( result +"="+ max );
}
console.log(maxString('javascript'));


// 6---->chunking array
let chunkArray = function(arr, chunkSize) 
{
    let groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) 
    {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(chunkArray(arr, 2));


// 7---->fizzbuzz
const fizzbuzz = (num) => {
    for(var i = 1; i <= num; i++){
      console.log((i % 3 === 0 && i % 5 === 0) ?
                    "fizzbuzz" : (i % 3 === 0 ?
                      "fizz" : (i % 5 === 0 ?
                        "buzz" : i)));
    }
  }
fizzbuzz(100);



// 8---->Digitalize 'Array of digits as string'
function digitalize(num){
    let v=num.toString();
    console.log(Array.from(v));
}
digitalize(123456);


// 9---->All possible combination of array elements into an array
const combination = arr => 
            arr.reduce((a, v) => 
            a.concat(a.map(r => 
            [v].concat(r))), [[]]);
console.log(combination([1, 2]));


