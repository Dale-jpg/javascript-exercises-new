const sumAll = function(firstNum,secondNum) {
    let finalSum = 0;
    for (i = 0; i < secondNum - 1; i++) {
        finalSum += firstNum + i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
