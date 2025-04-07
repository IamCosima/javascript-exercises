const sumAll = function(num1,num2) {
    sum = 0;

    if (Number.isInteger(num1) === true && Number.isInteger(num2) === true && num1 >0 && num2 >0){
        if (num1 > num2){
            var swap = num1;
            num1 = num2;
            num2 = swap;
            for (let i = num1; i <= num2; i++) {
                sum = sum + i;
            }
        }else{
            for (let i = num1; i <= num2; i++) {
                sum = sum + i;
            }
        }
    }
    else{
        return "ERROR"
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
