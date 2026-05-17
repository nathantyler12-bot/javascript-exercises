const reverseString = function(phrase) {
    let chars = phrase.length;
    let string = "";
    for (let i=chars; i > 0; i--) {
        string += phrase.substring(i,1)
    }
    return string
};

// Do not edit below this line
module.exports = reverseString;
