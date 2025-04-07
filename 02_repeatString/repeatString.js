const repeatString = function(string,repeatnum) {
    repeating = string

    if (repeatnum == 0){
        return ""
    }
    else if (repeatnum <0){
        return "ERROR"

    }
    for (let i = 1; i < repeatnum; i++) {
        string = repeating + string;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
