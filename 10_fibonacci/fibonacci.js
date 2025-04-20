const fibonacci = function(num) {
    let arr = [0,1]
    if (num < 0) {
        return "OOPS";
    } else {
        num = Number(num);
        for (i=2;i <= num;i++) {
            let sum = arr[i-2] + arr[i-1];
            arr.push(sum);
        }
        return arr[num];
    }
};

//Will have to do a for loop because not an array, no premade functions
// Fn = (n-1) + (n-2)
// 4 = (4-1) + (4-2)
// The answer is an index. 4 isn't asking to solve off of 4 its asking for
// the 4th Fibonacci
// Sike need it to be based on index
// "each element is the sum of the two elements that precede it."
// arr[n] = arr[n-2] + arr[n-1]

// Do not edit below this line
module.exports = fibonacci;
