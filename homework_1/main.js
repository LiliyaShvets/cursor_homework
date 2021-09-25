const priceApple = 15.678;
const priceMango = 123.965;
const pricePeach = 90.2345;


// 1
const maxPrice = Math.max(priceApple, priceMango, pricePeach);

console.log(maxPrice);


// 2
const minPrice = Math.min(priceApple, priceMango, pricePeach);

console.log(minPrice);


// 3
const amountFruits = priceApple + priceMango + pricePeach;

console.log(amountFruits);


// 4
const amountFruitsRounded = Math.floor(priceApple) + Math.floor(priceMango) + Math.floor(pricePeach);

console.log(amountFruitsRounded);


// 5
const amountFruitsHandredRounded = Math.round(amountFruitsRounded/100) * 100;

console.log(amountFruitsHandredRounded);


// 6 
const amountamountFruitsLog = amountFruitsRounded % 2 === 0;

console.log(amountamountFruitsLog);


// 7
const remainder = 500 - amountFruits;

console.log(remainder);


// 8
const averagePrice = (priceApple + priceMango + pricePeach) / 3;

console.log(+averagePrice.toFixed(2));


// 9
const sale = Math.random()*100;
const amountForPay = amountFruits - amountFruits * sale/100;
const profit = amountFruits/2 - amountFruits * sale/100;

console.log(sale);
console.log(+amountForPay.toFixed(2));
console.log(profit);


// 10
const results = `Максимальна ціна: ${maxPrice}<br/>
Мінімальна ціна: ${minPrice}<br/>
Вартість всіх товарів: ${amountFruits}<br/>
Округлена вартість всіх товарів до цілих чисел: ${amountFruitsRounded}<br/>
Округлена до сотень вартість всіх товарів: ${amountFruitsHandredRounded}<br/>
Cума всіх товарів (округлена в меншу сторону) є парним числом: ${amountamountFruitsLog}<br/>
Сума решти, при оплаті всіх товарів, якщо клієнт платить 500 грн: ${remainder}<br/>
Cереднє значення цін, округлене до другого знаку після коми: ${+averagePrice.toFixed(2)}<br/>
Cума до оплати округлену до 2 знаків після коми, коли клієнту зробили випадкову зничку: ${+amountForPay.toFixed(2)}<br/>
Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни: ${profit}`;

document.writeln(results);