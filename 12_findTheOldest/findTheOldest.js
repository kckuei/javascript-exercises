const findTheOldest = function (array) {

    const d = new Date(0);
    const currentYear = d.getFullYear();

    let initialPerson = array[0]
    let oldest = array.reduce((last, next) => {
        let lastAge = getAge(last.yearOfDeath, last.yearOfBirth, currentYear)
        let nextAge = getAge(next.yearOfDeath, next.yearOfBirth, currentYear)
        if (lastAge > nextAge) {
            return last;
        }
        return next;
    }, initialPerson);

    return oldest;
};

function getAge(yearDeath, yearBirth, currentYear) {
    if (typeof yearDeath === 'undefined') {
        return currentYear - yearBirth
    }
    return yearDeath - yearBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
