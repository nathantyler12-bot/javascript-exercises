const reverseString = function(phrase) {
    let chars = phrase.split("");
    let string = "";
    for (let i=chars.length; i > 0; i--) {
        string += chars[i-1]
    }
    return string
};


// Do not edit below this line
module.exports = reverseString;
