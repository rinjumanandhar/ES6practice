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
