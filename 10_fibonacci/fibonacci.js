const fibonacci = function(itterations) {
    let count
    if (typeof itterations !== 'number') {
        count = parseInt(itterations)
    } else {
        count = itterations
    }

    if (count < 0) {
        return "OOPS";
    }else if (count == 0) {
        return 0;
    }else{
        let fPrev = 1;
        let sPrev = 0;
    
        for (let i = 2; i <= count; i++) {
            let current = fPrev + sPrev;
            sPrev = fPrev;
            fPrev = current;
        }
        return fPrev;
    }

};

// Do not edit below this line
module.exports = fibonacci;
