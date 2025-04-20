const getAge = function getAge(death,birth) {
    if (!death) {
        death = new Date().getFullYear(); 
    }
    return death - birth
};


const findTheOldest = function(people) {
    return people.reduce((oldest,currentPerson)=> {
        const oldestAge = getAge(oldest.yearOfDeath,oldest.yearOfBirth);
        const currentAge = getAge(
            currentPerson.yearOfDeath,
            currentPerson.yearOfBirth
        );
        return oldestAge > currentAge ? oldest : currentPerson;
    });
};


// Death year - birth year = age
// Should return the whole person object
// How to determine who's the oldest? a and b?
// I could sort based on age, descending order and then return array[0];
// Do not edit below this line
module.exports = findTheOldest;
