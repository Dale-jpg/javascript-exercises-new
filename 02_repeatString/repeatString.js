let string = 'hey';
let number = 3;
let finalString = '';

const repeatString = function (string, number) {
    for (let i = 0; i < number; i++) {
        finalString += string;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
