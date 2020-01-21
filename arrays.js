console.log('arrays');

// take two parameters, one is the name of an array,
//the second is the value of the index of the array to print
//return the value of that index
const valuePrinter = (arrayName, indexValue) => {
    return arrayName[indexValue];
}

console.log(valuePrinter([1, 2, 3, 4, 5], 2));
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3));
