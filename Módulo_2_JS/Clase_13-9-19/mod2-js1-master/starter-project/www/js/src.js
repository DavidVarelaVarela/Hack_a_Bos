/* eslint-disable vars-on-top */
'use strict';

/*
function espacios(x){
    for( i=0;i<x;i++)
     document.write("  ");//espacio en blanco
   }

   function asteriscos( x){
    for( i=0;i<x;i++)
      document.write("*");
   }

   function piramide(){

    var a=5;

    for(i=a;i>=0;i--){
       espacios(i+1);
       asteriscos(a-i);
       document.write("<br />");
    }
   }

*/

function crearPiramide(numeroPisos) {
  for (let i = 0; i < numeroPisos; i++) {
    let piso = '';
    for (let k = 0; k <= numeroPisos - i; k++) {
      piso = piso + ' ';
    }
    for (let j = 0; j <= i; j++) {
      piso = piso + '*';
    }
    // eslint-disable-next-line no-console
    console.log(piso);
  }
}

crearPiramide(5);

var cadena = '* ';
var piramide = '';

//con for
for (var i = 0; i < 5; i++) {
  piramide += cadena;
  document.write(piramide + '<br>');
}

//con while
var contador = 0;
piramide = '';
while (contador < 5) {
  piramide += cadena;
  document.write(piramide + '<br>');
  contador++;
}

//con do while
contador = 0;
piramide = '';

do {
  piramide += cadena;
  document.write(piramide + '<br>');
  contador++;
} while (contador < 5);
