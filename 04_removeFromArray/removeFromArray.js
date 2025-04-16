const removeFromArray = function(array,eliminate) {
    let index = array.indexOf(eliminate);

    if (index > -1) {
        array.splice(index,1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
