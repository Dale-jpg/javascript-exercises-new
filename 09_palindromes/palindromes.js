
const palindromes = function (str) {
    let cleanedText = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let arrayStr = cleanedText.split('');
    let cleanedTextForward = arrayStr.join();
    let cleanedTextReverse = arrayStr.reverse().join();

    
    if (cleanedTextForward === cleanedTextReverse) {
        return true;
    } else {
        return false;
    }
};

// *** Initial pseudocode ***
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

// *** Final pseudocode ***
// 1. Clean the string of punctuation and word breaks
// 2. Split the string into an array so the letters are separate
// 3. Have one string with it normal and the other string with it reversed
// 4. Its funny to think I was caught up on splitting it and comparing when 
// all that had to be done was reverse the whole string. "A palindrome is a 
// string that is spelled the same both forwards and backwards"


// Do not edit below this line
module.exports = palindromes;
