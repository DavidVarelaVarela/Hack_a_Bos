class Gambler {
  static givePrediction() {
    const prediction = Math.ceil(Math.ramdom * 50);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prediction);
      }, prediction);
    });
  }
static givePrediction(numPredictions){
    const numPredictions =[];

    for (let i=0; i<numPredictions; i++){
      const prediction.push{this.givePrediction(());
    }
    return prediction;
}

}

console.log(
  Gambler.givePrediction().then((myNumber) => {
    console.log(myNumber);
  })
);
Promise.all(Gambler.givePrediction(10)).then ((values)=>{
    console.log(values);
});
