class Gambler {
  static givePrediction() {
    const prediction = Math.ceil(Math.ramdom * 50);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prediction);
      }, prediction);
    });
  }
}
console.log(
  Gambler.givePrediction().then((myNumber) => {
    console.log(myNumber);
  })
);
