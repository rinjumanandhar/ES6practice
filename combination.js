// 9---->All possible combination of array elements into an array
const combination = arr => 
            arr.reduce((a, v) => 
            a.concat(a.map(r => 
            [v].concat(r))), [[]]);
console.log(combination([1, 2]));