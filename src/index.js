import validator from './validator.js';
// elementos del DOM
const name1 = document.getElementById("name");
const card = document.getElementById("number");
const respuesta = document.getElementById("result");
const btn = document.getElementById("btnPay");
const imp=document.getElementById("result");
console.log(btn);

function printValidation(){
    const cardNumber = document.getElementById("number").value;
    const validateCard = validator.isValid(cardNumber)
    console.log('BLABLABLABLABLABLA', validateCard)
    if(validateCard===true){
        respuesta.innerHTML= 'Tu tarjeta es valida'
    }else {
        respuesta.innerHTML= 'Tu tarjeta es invalida'
    }
}

function observetheCard(){
    const cardNumber = document.getElementById("number").value;
    imp.innerHTML = validator.maskify(cardNumber)
    console.log('Hola',cardNumber)
}

  //Se captura el evento
btn.addEventListener("click", printValidation);
console.log(validator);