console.log('combo');


// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.
const evenOdd = aNumber => {
    if (aNumber % 2 === 0){
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
console.log(evenOdd(4));
console.log(evenOdd(7));

// Challenge 1 in class solution is same as my solution

// Challenge #2
// given a number, find its opposite. 2 = -2
const oppositesGame = anyNum => {
    return anyNum * -1;
}
console.log(oppositesGame(4));
console.log(oppositesGame(-6));

// Challenge 2 in class solution is the same as my solution


// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
const palindrome = phrase => {
    const re = /[^A-Za-z0-9]/g;
    phrase = phrase.toLowerCase().replace(re, '');
    const len = phrase.length;
    for (let i = 0; i < len/2; i++) {
        if (phrase[i] !== phrase[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


console.log(palindrome('mom'));
console.log(palindrome('Murder for a jar of red rum.'));
console.log(palindrome('not a palindrome'));
console.log(palindrome('Taco. cat'))

// Challenge 3 in class solution --- you also have to get rid of all the punctuation still. You can use a replace, but the code above is easier.
// there is another way to do it as a pure function that you can find on freecodecamp
const palindrome1 = text => {
    const cleanText = text.toLowerCase().replace(' ', '');
    const opp = cleanText.toLowerCase().split('').reverse().join('');
    if (cleanText = opp) {
        return true;
    }
    else {
        return false;
    }

}

console.log(palindrome1('mom'));
console.log(palindrome1('racecar'));
console.log(palindrome1('cat'));
console.log(palindrome1('bear'));

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.

const animalSize = animal => {
    const lowerCaseAnimal = animal.toLowerCase();
    if (lowerCaseAnimal === 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }
}

console.log(animalSize('boar'));
console.log(animalSize('Alligator'));
console.log(animalSize('Sheep'));
console.log(animalSize('alligator'))

// Challenge 4 in class solution 
const animal = str => {
    if (str.toLowerCase() === 'alligator') {
        return small;
    }
    else {
        return PerfWidgetExternal;
    }
}