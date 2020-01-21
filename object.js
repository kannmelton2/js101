console.log('Objects');

const wordLength = (word) => {
    return word.length;
}

console.log('number of letters in the word cat:', wordLength('cat'));
console.log('number of letters in the word no:', wordLength('No'));

const ageCheck = age => {
    if (age < 21) {
        console.log('No drinks for you');
    }
    else {
        console.log('PARTY!!!');
    }
}

ageCheck(12);
ageCheck(24);

const expense = {
   dateCreated: '01/17/2020',
   location: 'Baja Burrito',
   cost: 12.57,
   isGood: true
};

console.log(expense['cost']);

const employee = {
    firstName: 'Achilles',
    lastName: 'Melton',
    job: 'Giver of Love and Puppy Kisses',
    industry: 'happiness',
    startDate: '04/18/2015',
    payment: 'two meals, plus treats and a daily walk',
    likesToCuddle: true
};

const statusMaker = (employeeStatus) => {
    if (employeeStatus.firstName[0] === 'M') {
        employeeStatus.status = 'vip';
    }
    else {
        employeeStatus.status = 'peasant';
    }
    return employeeStatus;
}
statusMaker(employee);
console.log(employee);


