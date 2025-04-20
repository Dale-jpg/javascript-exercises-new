const fibonacci = function(num) {
    let arrayFibonacci = [0,1]
    for (i=2;i <20;i++) {
        let sum = (i-1)+(i-2);
        arrayFibonacci.push(sum);
    }
    return arrayFibonacci [num-1];
};

//Will have to do a for loop because not an array, no premade functions
// Fn = (n-1) + (n-2)
// 4 = (4-1) + (4-2)
// The answer is an index. 4 isn't asking to solve off of 4 its asking for
// the 4th Fibonacci

// Do not edit below this line
module.exports = fibonacci;
