const fibonacci = function(num) {
    let sequence = [0,1];
    let index = 0;
    let validNum = parseInt(num);

    if (validNum === 0) return 0;
    if (validNum < 0) return "OOPS";

    while (index < validNum) {
        sequence.push(sequence.slice(-2).reduce((total, current) => total + current, 0));
        index++;
    }

    return sequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
