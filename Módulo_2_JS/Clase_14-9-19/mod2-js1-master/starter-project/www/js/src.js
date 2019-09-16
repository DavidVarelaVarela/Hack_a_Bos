'use strict';

//Ordenar numero de menos a mayor
/*
function ejemplo() {
let desordenado = [7,5,10,3,4];
console.log(desordenado.sort(function (a, b){
    return a - b;
}))
console.log(desordenado.sort((a, b) => a - b ))
*/
/*
const desordenado = [7, 5, 10, 3, 4];

function ordenaElArray(elDato) {
  const datoOrdenado = [...elDato];

  for (let i = 0; i < datoOrdenado.length; i++) {
    for (let j = 0; j < datoOrdenado.length; j++) {
      if (datoOrdenado[i] > datoOrdenado[j]) {
      }
      const temp = datoOrdenado[j];
      datoOrdenado[j] = datoOrdenado[i];
      datoOrdenado[i] = temp;
    }
  }
  return datoOrdenado;
}

const ordenado = ordenaElArray(desordenado);
console.log(ordenado);
*/
/*
var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar ); 
*/
/*
function nuestroCallback(texto) {
  console.log(texto);
}

function eco(unCallback) {
    const contenido ="hola";
    console.log(contenido)
  unCallback(contenido);
}
eco(nuestroCallback);
*/

/*
const = desordenado = [7,5,10,3,4]
function test(params) {
    desordenado.forEach(callback)
}
*/

const desordenado = [7, 5, 10, 3, 4];
function tiene10(datos) {
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] === 10) {
    }
    return true;
  }
  return false
}
console.log(tiene10(desordenado));