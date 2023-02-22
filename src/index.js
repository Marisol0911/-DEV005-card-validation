import validator from "./validator.js";

// elementos del DOM
const number = document.getElementById("number");
const result = document.getElementById("result");
const btn = document.getElementById("btnPay");

function printValidation() {
  const cardNumber = number.value;
  const validateCard = validator.isValid(cardNumber);
  if (validateCard === 0) {
    result.innerHTML = "Tu tarjeta es valida";
  } else {
    result.innerHTML = "Tu tarjeta es invalida";
  }

  const coverNumber = validator.maskify(cardNumber, "*", 4);
  number.value = coverNumber;
}

//Se captura el evento
btn.addEventListener("click", printValidation);
