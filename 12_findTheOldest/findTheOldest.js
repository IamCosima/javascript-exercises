const findTheOldest = function(array) {
    // const people = [
    //     {
    //       name: "Carly",
    //       yearOfBirth: 1942,
    //       yearOfDeath: 1970,
    //     },
    //     {
    //       name: "Ray",
    //       yearOfBirth: 1962,
    //       yearOfDeath: 2011,
    //     },
    //     {
    //       name: "Jane",
    //       yearOfBirth: 1912,
    //       yearOfDeath: 1941,
    //     },
    //   ]

    var people = array;

    let peoples = people.forEach(people => {
        let yearOfBirth = people['yearOfBirth'];
        let yearOfDeath = people['yearOfDeath'];
        if (yearOfDeath != null){
            people['age'] = yearOfDeath - yearOfBirth ;
        }else{
            const today = new Date();
            people['age'] = today.getFullYear() - yearOfBirth ;
        }
    })
    console.log(people)
    let age = people.reduce((prev,current) => {
        return prev.age > current.age ? prev : current
    }) 
    console.log(age)
    return age
};

// Do not edit below this line
module.exports = findTheOldest;
