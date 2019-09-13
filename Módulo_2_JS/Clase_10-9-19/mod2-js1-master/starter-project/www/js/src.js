`use strict`

/*const elDatoOriginal = [1,2,3,4,5,6,7,8];

function datoVuelta(elDato) {
  const alReves =1;
  for (let i = elDato.length -1; i >=0; i--) {
    alReves.push(elDato(i))
  ];
  return alReves
  }
 

console.log= (alReves)

*/

let enfermos =[true,false,true,false,false,false,true,false];
let sanos = [...enfermos];
for (let i = 0 ;i < enfermos.length; i++) {
  if (enfermos[i]===true && i !=0 && i !=enfermos.length ){
    sanos[ i +1] = true;
    sanos [i -1] = true;
   
  }
if (enfermos[i]=== true) {
  enfermos [i] = false;
}
  
}
console.log(sanos);


3426141





