
const getRandomChinese = async (length) => {
  let i = 0;
  let sign = '';
  while(i < length) {
    sign += String.fromCharCode(Date.now().toString().slice(-5));
    
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 50)
    });
    i++;
  }
  console.log(sign);
  return sign;

}

console.log(getRandomChinese(4));