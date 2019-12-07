import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import './styles.css';
import '../node_modules/bootswatch/dist/sketchy/bootstrap.css';

/**
 * Este es el componente raiz de mi aplicacion y
 * normalmente es donde definire mis rutas
 * Si tengo componentes comunes a todas las rutas puedo incluirlos
 * en este componente como en el caso del <Header />
 */
function App() {
  return (
    // <BrowserRouter /> se encarga de iniciar el router y activar los servicion que lo gestionan
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        {/* <Switch /> se encarga de hacer que sólo una ruta a la vez se muestre. No permite multiples matches */}
        <Switch>
          {/* <Route /> nos permite configurar cada una de las rutas
            - path: Permite configurar en que url/path se renderizara el componente indicado en la ruta
            - exact: Hace que el match del string sea exacto. Normalmente lo usamos en '/' */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// Busco el elemento del index.html en el que quiero cargar la aplicación
const rootElement = document.getElementById('root');

// La cargo a través de React.render() - Mi arbol de componentes compilado a HTML se mostrará
// en el elemento <div id="root"></div> de index.html
ReactDOM.render(<App />, rootElement);
