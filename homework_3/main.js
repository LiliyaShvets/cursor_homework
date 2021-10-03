// Функція №1 

const getMaxDigit = () => {
    const randomNumber = Math.trunc(Math.random() * 10000);
    const arrayOfDigits = Array.from(String(randomNumber), Number);

    return Math.max(...arrayOfDigits);
};



// Функція №2 
const getPowNumber = (x, n) => {
    const isNegative = n < 0;
    let result = 1;

    n = isNegative ? Math.abs(n) : n;

    for (let i = 1; i <= n; i++) {
      result *= x;
    }

    return isNegative ? (1 / result) : result;
};


// Функція №3
const getCapitalizedName = (name) => {

    for (let i = 0; i < name.length; i++){
        lower = name.toLowerCase();
        firstLetter = lower.slice(0, 1);
        capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
    }
    return capitalized;
};


// Функція №4
const calculationSalary = (salary) => {
    const tax = salary * 0.195;
    return salary = salary - tax;
};


// Функція №5
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Функція №7
const convertCurrency = (amountForChange, nameCurrency) => {
    const rateCurrency = 25;
    
    if (amountForChange.includes('$')) {
        return parseInt(amountForChange) * rateCurrency + ' uah';
    } 

    if (nameCurrency = amountForChange.includes('uah') || amountForChange.includes('UAH') || amountForChange.includes('Uah')) {
        return parseInt(amountForChange) / rateCurrency + ' usd';
    } else {
        alert("Error");
    }

    return parseInt(amountForChange);

};


// Функція №9
const deleteLetters = (someWord, m) => {
    const lettersArray = someWord.split(m);
    return lettersArray.join('');
};


// Функція №11

const deleteDuplicateLetter = (str) => {
    str = str.toLowerCase();

    const strLowerCase = str.split('');
    const result = strLowerCase.filter( (val, i, str) => {
    return str.lastIndexOf(val) === str.indexOf(val);
        
    });
    return result.join('');
};


document.writeln(
    `
    Функція №1: ${getMaxDigit()}</br>
    Функція №2: ${getPowNumber(3, 3)}</br>
    Функція №3: ${getCapitalizedName("ВлаД")}</br>
    Функція №4: ${calculationSalary(4700)}</br>
    Функція №5: ${getRandomNumber(2, 9)}</br>
    Функція №7: ${convertCurrency("27000 $")}</br>
    Функція №9: ${deleteLetters('blablabla', "a")}</br>
    Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</br>
    `
);