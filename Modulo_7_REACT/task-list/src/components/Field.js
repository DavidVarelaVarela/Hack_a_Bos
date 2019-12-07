import React from 'react';

function Field({ title, placeholder, id, type, value, onFieldChange }) {
  // Recibimos todo lo necesario para "pintar" un campo de mi formulario
  // Además cuando el input cambia avisamos al padre a través de la ejecución del callback que
  // me envía  (onFieldChange) usando el valor que contiene el input (e.target.value)

  // Hago uso de simples ifs para mostrar un input o una textarea
  if (type === 'text') {
    return (
      <div className="form-group">
        <label>{title}</label>
        <input
          id={id}
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={e => onFieldChange(e.target.value)}
        />
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="form-group">
        <label>{title}</label>
        <textarea
          id={id}
          type="text"
          className="form-control"
          placeholder={placeholder}
          rows={5}
          value={value}
          onChange={e => onFieldChange(e.target.value)}
        />
      </div>
    );
  }
}

export { Field };
