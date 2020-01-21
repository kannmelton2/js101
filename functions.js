console.log('functions');

const nuggetizer = food => {
    const output = `processed ${food}`;
    return output;
}

console.log(nuggetizer('chickpeas'));
console.log(nuggetizer('tofu'));
console.log(nuggetizer('seitan'));
console.log(nuggetizer('cauliflower'));

const dogBreed = breed => {
    return `My favorite dog breed is ${breed}.`;
}

console.log(dogBreed('American Staffordshire Terrior'));

const fortyTwo = num => {
    return 42 + num;
}

console.log(fortyTwo(8));
console.log(fortyTwo(2));
console.log(fortyTwo(-2));
console.log(fortyTwo(3));

const oldAge = num => {
    const aged = 2099 - num;
    return `You will be ${aged} in 2099`;
}

console.log(oldAge(1994));
console.log(oldAge(1992));
console.log(oldAge(2020));