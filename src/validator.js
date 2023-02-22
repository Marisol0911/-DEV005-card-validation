const validator = {
  isValid: function (num) {
    let cardNumberArray = Array.from(String(num), Number);
    let positionSum = 0;

    for (let i = cardNumberArray.length - 1; i >= 0; i--) {
      console.log(cardNumberArray[i]);
      let multiplication = 0;

      if (i % 2 === 0) {
        console.log("es par");
        multiplication = cardNumberArray[i] * 2;

        if (multiplication >= 10) {
          let remainder = 0;
          let sumOfDigits = 0;

          while (multiplication) {
            remainder = multiplication % 10;
            sumOfDigits = sumOfDigits + remainder;
            multiplication = Math.floor(multiplication / 10);
          }

          positionSum += sumOfDigits;
          console.log("valor a sumar " + sumOfDigits);
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
    return final;
  },

  maskify: function (string, mask, numberOfDigits) {
    return (
      ("" + string).slice(0, -numberOfDigits).replace(/./g, mask) +
      ("" + string).slice(-numberOfDigits)
    );
  },
};

export default validator;
