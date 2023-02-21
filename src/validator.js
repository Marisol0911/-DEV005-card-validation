const validator = {
  
  isValid: function (num){
    
  
    let cardNumberArray = splitIntoArray(num);
    let positionSum = 0;
    let sumaPositionimpar = 0;
  
    for (let i = cardNumberArray.length - 1; i >= 0; i--) {
      console.log(cardNumberArray[i]);
      let multiplication = 0;
  
      if (i % 2 === 0) {
        console.log("es par");
        multiplication = cardNumberArray[i] * 2;
        console.log(multiplication);
  
        if (multiplication >= 10) {
          positionSum += calculateSumOfDigits(multiplication);
          console.log("valor a sumar" + positionSum);
        } else {
          positionSum += multiplication;
          console.log("valor a sumar" + positionSum);
        }
    } else {
        console.log("es impar");
        positionSum += cardNumberArray[i];
      }
    }
    let final = positionSum % 10;
    console.log(final);
    return (final);
  },

  /*maskify: function (num){
    const cubrir = ''
    const cardNumberArray = cardNumberArray.toString()
    for(let  i= 0; i<cardNumberArray.length; i++){
    if(i<4){
    cubrir = cubrir + cardNumberArray[i]
  }else{
      cubrir = cubrir = '#'

    }
    console.log(cubrir)
  }*/

}


  
  // Util function: split string into array of number
  function splitIntoArray(num) {
    return Array.from(String(num), Number);
  }
  
  // Util function: calculate the sum of digits of given number
  function calculateSumOfDigits(number) {
    let remainder = 0;
    let sumOfDigits = 0;
    while (number) {
      remainder = number % 10;
      sumOfDigits = sumOfDigits + remainder;
      number = Math.floor(number / 10);
    }
    return sumOfDigits;
  
   
    return (validator);
   
  

  }

  

export default validator;
  