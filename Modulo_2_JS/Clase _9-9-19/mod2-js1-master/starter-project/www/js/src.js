"use strict";

/*

//Declaración de funciones

function estaEsSuperFacil() {
  console.log("FACILISIMO");
}
//Expresión de función
let estaEsOtraManera = function name(params) {
  console.console.log("FACILISIMO TAMBIEN");
};

estaEsOtraManera();

let estaEsOtraManera_2 = () => {
  console.console.log(FACILISIMO);
};
estaEsOtraManera_2();

// IIFE  Autollamado de función

(function() {
  console.log(va_sola);
});

function eco(queDigo) {
  console.log(queDigo);
}
let leDigoEsto = "esto";
eco(leDigoEsto);


*/

//TODO: ESTUDIAR LAS FUNCIONES

function patasAnimal(animal) {
  let patas;
  switch (animal) {
    case "perro":
      patas = 4;
      break;
    case "araña":
      patas = 8;
      break;
    case "cienpies":
      patas = 100;
      break;
    case "canguro":
      patas = 2;
      break;
    default:
      patas="NO TIENE PATAS";
      break;
  }
  return patas;
}

console.log(patasAnimal("perro"));
console.log(patasAnimal("araña"));

// function queAnimal(animal) {
//   let numeroDePatas;
//   switch (animal) {
//     case "perro":
//       numeroDePatas = 4;

//       break;

//     default:
//       numeroDePatas = "no tiene patas";
//       break;
//   }
// }
// let numeroDePatas = queAnimal("perro");
// console.log(`el perro tiene $(numeroDePatas) patas`);



