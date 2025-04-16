const sumAll = function(firstNum,secondNum) {
    if (firstNum < 0 || secondNum < 0) return "ERROR";
    if (firstNum > secondNum) {
        const temp = secondNum;
        secondNum = firstNum;
        firstNum = temp;
    }
    let finalSum = 0;
    for (i = firstNum; i <= secondNum; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
