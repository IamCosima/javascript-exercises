const reverseString = function(string) {
    var reversed = ''
    for (let i = string.length -1; i >= 0; i--) {
        reversed = reversed + string[i]
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
