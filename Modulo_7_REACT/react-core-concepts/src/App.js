import React from 'react';

function Form() {
  return (
    <form>
      <p>Search Form: </p>
      <input type="text"></input>
      <button type="submit">Go!!</button>
    </form>
  );
}

// const Button = ({ text }) => <button type="submit">{text}</button>;
function Button({ text }) {
  return <button type="submit">{text}</button>;
}

function RandomValue() {
  const calc = () => Math.floor(Math.random() * 100);

  return <p>{calc()}</p>;
}

class ButtonClass extends React.Component {
  render() {
    return <button type="submit">{this.props.text}</button>;
  }
}

function CounterButton() {
  let counter = 0;
  return <button onClick={e => console.log(counter++)}>Counter button</button>;
}

function SubmitForm() {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log('Submit!!');
      }}
    >
      <input type="text"></input>
      <button>Go!!</button>
    </form>
  );
}

function App() {
  return (
    <React.Fragment>
      <h1>Componente funcional representando un boton</h1>
      <Button text="Un boton" />
      <hr />
      <h1>Componente funcional representando un formulario</h1>
      <Form />
      <hr />
      <h1>Generar un numero aleatorio entre el 1 - 100</h1>
      <RandomValue />
      <hr />
      <h1>Un boton con una clase</h1>
      <ButtonClass text="Button Class" />
      <hr />
      <h1>Boton que hace log de un contador</h1>
      <CounterButton />
      <hr />
      <h1>Submit</h1>
      <SubmitForm />
    </React.Fragment>
  );
}

export default App;
