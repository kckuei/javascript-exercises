const leapYears = function (year) {

    const divisBy4 = (year % 4 == 0);
    const divisBy100 = (year % 100 == 0);
    const divisBy400 = (year % 400 == 0);

    if (divisBy4 && divisBy100 && divisBy400) {
        return true;
    }
    if (divisBy4 && !divisBy100) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
