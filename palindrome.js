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