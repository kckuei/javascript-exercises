const palindromes = function (string) {
    string = string.replace(/\s+/g, '');
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    string = string.toLowerCase();
    for (let i = 0; i < parseInt(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
