let numberN;
while (!Number.isInteger(numberN)){
    numberN = +prompt("Введіть ціле число N"); 
};

let numberM;
while (!Number.isInteger(numberM) || numberM < numberN){
    numberM = +prompt("Введіть ціле число M, яке є більшим за N"); 
};


const numbersSkip = confirm("Пропускати парні числа?");
let numbersSum = 0;

for (let i = numberN; i <= numberM; i++) {
    if (numbersSkip) {
        if (i%2 === 0) {
            continue;
        }
    }
    numbersSum += i;
}

document.writeln(`Сумма введених чисел: ${numbersSum}`);
