const sumAll = function(number1, number2) {
    let numberSum = 0;
    let smallNumber = 0;
    let bigNumber = 0;

    if (number1 > number2) {
        bigNumber = number1;
        smallNumber = number2;
    } 
    else if (number1 < number2) {
        bigNumber = number2; 
        smallNumber = number1;
    }
        
    if (smallNumber >= 0 && bigNumber >= 0) {
        for (let i = smallNumber; i <= bigNumber; i++) {
            numberSum = numberSum + i;
        }
    }

    if ((number1 < 0 || number2 < 0) || 
    (Number.isInteger(number1) === false || Number.isInteger(number2) === false)) {
        return "ERROR"
    } 
    else return numberSum;
    
};

// Do not edit below this line
module.exports = sumAll;
