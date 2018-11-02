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