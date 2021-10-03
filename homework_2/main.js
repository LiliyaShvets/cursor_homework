let numberN;
while (!Number.isInteger(numberN) || !numberN){
    numberN = +prompt("Введіть ціле число N"); 
};


let numberM;
while (!Number.isInteger(numberM) || numberM < numberN){
    numberM = +prompt("Введіть ціле число M, яке є більшим за N"); 
};


const numbersSkip = confirm("Пропускати парні числа?");
let numbersSum = 0;

for (let i = numberN; i <= numberM; i++) {
    if (numbersSkip && i%2 === 0) {
        continue;
    }
    numbersSum += i;
}

document.writeln(`Сумма введених чисел: ${numbersSum}`);






// while ( true )
// {  
//     var variable1 = prompt ('Write "2", please');

//     if ( variable1 == 2 ) break;

//     alert( "Error. Invalid value" ); 
// }

// if (numberN !== numberN.trim()) {
//     numberN = prompt("Введіть ціле число N"); 
// }

