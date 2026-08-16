const leapYears = function(year) {
    let yearDivisors = [4,100,400]
    let remainders = yearDivisors.map((x) => year % x)
    if (remainders[0] == 0 && remainders[1] != 0 && remainders[2] != 0) {
        return true
    } else if (remainders[0] == 0 && remainders[1] == 0 && remainders[2] == 0) {
        return true
    } else return false
};

// Do not edit below this line
module.exports = leapYears;
