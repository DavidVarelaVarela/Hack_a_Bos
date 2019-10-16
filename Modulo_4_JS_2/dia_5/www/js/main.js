
const suma = (a, b) => a + b;

console.log(suma(10, 33));
const sumaDiferida = (a, b) => {
  let resultado;
  setTimeout(() => {
    resultado = a + b;
  }, 1000);
};
//Promesa
console.log(sumaDiferida(10, 30));

const sumaDiferidaPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b))
      return reject(new Error("Los valores deben ser numeros"));
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};
sumaDiferidaPromise(10, 30)
  .then(resultado => console.log(resultado))
  .catch(error => console.log(error.message))
  .finally(() =>console.log("xa acabei"))
