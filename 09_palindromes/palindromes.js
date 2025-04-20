str = "A car, a man, a maraca."

const palindromes = function (str) {
    let length = str.length;
    console.log(length);
};

// str = "A car, a man, a maraca."
function palindromes (str) {
    let cleanedText = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let arrayStr = cleanedText.split('');
    console.table(arrayStr);
    let length = arrayStr.length;
    let halfWayPoint = Math.ceil(length / 2);
    let firstHalf = arrayStr.slice(0,halfWayPoint);
    console.log(firstHalf);
    let secondHalf = arrayStr.slice(halfWayPoint)
    let secondHalfReverse = secondHalf.reverse();
    console.log(secondHalfReverse);
    let secondHalfStr = secondHalfReverse.join('');
    let firstHalfStr = firstHalf.join('');
    console.log(secondHalfStr);
    console.log(firstHalfStr);

    
    if (firstHalfStr == secondHalfStr) {
        return true;
    } else {
        return false;
    }
}

palindromes("A car, a man, a maraca.");
// palindromes("Rats live on no evil star.");

// palindromes("A car, a man, a maraca.");
// a palindrome is a string spelled the same both forwards or backwards
// usually without considering punctuation or word breaks
// 1. How long is the string
// 2. Where does it break? i.e. "A car, a man, a maraca."
// 3. At the point it breaks, slice the last half of the string.
// 4. Do a reverse on the last half of the string.
// 5. Compare the first half to the second half
// 6. If first half is equal to the second half after the reverse, return true
// 7. Otherwise, return false
// 8. Probably have to figure out how to remove spaces and punctuation from the string


// Do not edit below this line
module.exports = palindromes;
