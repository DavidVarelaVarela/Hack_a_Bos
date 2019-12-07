import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Definimos un estado para la gestión la interfaz de usuario
  // En este caso para evaluar sin el Header esta abierto o cerrado en mobile
  // useState tiene como parámetro el estado inicial y devuelve un array en el cual
  // en la primera posición estará el estado actual y en la segunda una función para modificarlo
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* En botoón gestiona un evento onClick
          Cuando se pulsa se ejecuta el callback que usa setOpen para modificar el estado
          y por tanto hacer que el componente se renderice de nuevo
       */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={e => setOpen(!open)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand">
        Awesome Todos
      </Link>

      {/* A través de expresiones ternarias y template literals puedo modificar las
       clases que se asocian con un elemento HTML como el siguiente <div>
       "collapse navbar-collapse" siempre se usan pero "show" sólo se añade si en el estado open === true
       Se puede hacer con la expresión ternaria o bien con -> open && 'show'
       */}
      <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
