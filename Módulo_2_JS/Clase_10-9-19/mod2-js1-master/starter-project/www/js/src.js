'use strict';


function desactiveLaBomba() {
    let codigo = Math.round(Math.random()*10);
    console.log(codigo);
    for (let i = 0; i < 5; i++) {
        let intento = parseInt(prompt());
        if (codigo === intento) {
            return true;
        }
    }
    return false
}                                          

let acerte = desactiveLaBomba()

if (acerte) {
    console.log('desactivado')
} else {
    console.log('BOOM');
}





