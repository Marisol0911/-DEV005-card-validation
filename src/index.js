import validator from "./validator.js";

// elementos del DOM
const name1 = document.getElementById("name");
const cardNumber = document.getElementById("number");
const respuesta = document.getElementById("result");
const btn = document.getElementById("btnPay");
const btnSee = document.getElementById("btnSee");
const number = document.getElementById("numberCard");

function printValidation() {
  const cardNumber = document.getElementById("number").value;
  const validateCard = validator.isValid(cardNumber);
  console.log("BLABLABLABLABLABLA", validateCard);
  if (validateCard === 0) {
    respuesta.innerHTML = "Tu tarjeta es valida";
  } else {
    respuesta.innerHTML = "Tu tarjeta es invalida";
  }
}

function observetheCard() {
  const number = document.getElementById("numberCard").value;
  const coverNumber = validator.maskify(number, "*", 4);
  number.innerHTML = coverNumber;
}

//Se captura el evento
btn.addEventListener("click", printValidation);
btnSee.addEventListener("click", observetheCard);
cardNumber.addEventListener("keypress", observetheCard);
