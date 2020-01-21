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