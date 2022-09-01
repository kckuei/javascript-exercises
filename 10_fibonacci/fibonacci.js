const fibonacci = function (num) {

    if (num < 0) {
        return 'OOPS';
    }
    if (num < 3) {
        return 1;
    }

    let num1 = 1;
    let num2 = 1;
    let next;
    for (let i = 0; i < num - 2; i++) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
    return next;
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
