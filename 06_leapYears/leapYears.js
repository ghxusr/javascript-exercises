const leapYears = function(year) {
    let answer = false;

    if (year % 4 === 0 && year % 100 != 0) {
        answer = true;
    }

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        answer = true;
    }
    return answer;
};

// Do not edit below this line
module.exports = leapYears;
