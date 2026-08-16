const sumAll = function(firstNumberInput, secondNumberInput) {
    if (firstNumberInput >= 0 && secondNumberInput >= 0 && Number.isInteger(firstNumberInput) == true 
    && Number.isInteger(secondNumberInput) == true) {
        let arrayOfNumbers = [firstNumberInput, secondNumberInput].toSorted((a,b) => a - b)
        for (i=arrayOfNumbers[0] + 1; i < arrayOfNumbers[1]; i++) {
            arrayOfNumbers.push(i)
        }
        initialValue = 0
        let sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
        return sum
    } else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
