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

// Challenge #2
// given a number, find its opposite. 2 = -2
const oppositesGame = anyNum => {
    return anyNum * -1;
}
console.log(oppositesGame(4));
console.log(oppositesGame(-6));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
/* const palindrome = phrase => {
    const re = /[^A-Za-z0–9]/g;
    const lowerCaseStr = phrase.toLowerCase().replace(re, '');
    const reverserStr = lowerCaseStr.split('').reverse('').join('');
    return reverseStr = lowerCaseStr;
}

console.log(palindrome('a man, a plan, a canal. panama')); */

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindrome('mom'));
   // above is not my code - change to own