const removeFromArray = function(array, ...args) {
    let newArray = array
    for (arg of args) {
        newArray = newArray.filter((element) => element !== arg)
    } 
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
