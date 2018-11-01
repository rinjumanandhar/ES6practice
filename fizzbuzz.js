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