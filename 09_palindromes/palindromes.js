const palindromes = function (string) {
    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const stringlower = string.toLowerCase()

    const stringsplit = stringlower.split('')

    const stringfilter = stringsplit.filter((character) => allowed.includes(character)) 

    const clean = stringfilter.join()

    const reversedString = clean.split('').reverse().join('');

    if(clean == reversedString) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
