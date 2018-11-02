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
