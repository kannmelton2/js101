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