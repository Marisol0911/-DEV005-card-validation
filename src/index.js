import validator from "./validator.js";

// elementos del DOM
const number = document.getElementById("number");
const result = document.getElementById("result");
const btn = document.getElementById("btnPay");

function printValidation() {
  const cardNumber = number.value;
  const isValid = validator.isValid(cardNumber);
  if (isValid) {
    result.innerHTML = "Tu tarjeta es valida";
    result.style.backgroundColor = "green";
  } else {
    result.innerHTML = "Tu tarjeta es invalida";
    result.style.backgroundColor = "red";
  }

  const coverNumber = validator.maskify(cardNumber, "#", 4);
  number.value = coverNumber;
}

//Se captura el evento
btn.addEventListener("click", printValidation);
const numberr = document.getElementById("number");
numberr.addEventListener("keyup", (event) => {
  const num = event.target.value;
  event.target.value = num.replace(/ /g, "");
});
