
const numbers = [];

// 1
const  getRandomInRange = (min, max, length) => {
    for (let i = min; i <= length; i++) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}  
console.log(getRandomInRange(3, 9, 4));


// 2
const getMediana = (...numbers) => {
    const arr = numbers.sort((a, b) => a - b).filter(number => Number.isInteger(number));
    let i = arr.length / 2;
    return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}
console.log(getMediana(1, 2, 3, 3.6, 2.4, 4, 5));


// 3
const getAverage = (...numbers) => 
    numbers.filter(number => Number.isInteger(number))
    .reduce((a, b) => (a + b))  / numbers.filter(number => Number.isInteger(number)).length

console.log(getAverage(4, 9, 2, 3.4, 3.2));


// 5
const filterEvenNumbers = (...numbers) => numbers.filter(number => !(number % 2 == 0));
console.log(filterEvenNumbers(1, 2, 3, 4, 6, 6, 7, 8));


// 6
const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;
console.log(countPositiveNumbers(1, -9, -3, 4, 6, -2, 7, -8));


// 7
const getGDivideByFive = (...numbers) => numbers.filter(number => number % 5 === 0);
console.log(getGDivideByFive(5, 19, 20, 25, 39, 9));


// 8
const replaceBadWords = (string) => {
    let str = string;
    const badWords = ['shit', 'fuck'];
    for(let words of badWords){
        str = str.split(words).join('****');
    }        
    return str;
}
console.log(replaceBadWords('What a fucking beautiful place?'));


// 9
const divideByThree = (word) => {
    word = word.toLowerCase();
    const syllables = [];
    for (let i = 0; i < word.length; i +=3 ) {
        syllables.push(word.slice(i, i + 3))
    }
    return syllables;
}
console.log(divideByThree('КалаМпака'));


