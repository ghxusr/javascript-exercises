const findTheOldest = function(people) {
    const oldestAge = people.sort((a, b) => {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1
        } else if ((a.yearOfDeath === undefined || b.yearOfDeath === undefined && 
                a.yearOfBirth < b.yearOfBirth)) {
            return -1;
        } 
    });
    return oldestAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
