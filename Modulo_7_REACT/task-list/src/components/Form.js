import React, { useState } from "react";
import { Field } from "./Field";

function Form({ onAddTask }) {
  // Definimos un estado para la gestión de los datos del formulario
  // useState tiene como parámetro el estado inicial y devuelve un array en el cual
  // en la primera posición estará el estado actual y en la segunda una función para modificarlo
  // Inciamos el formulario a un objeto vacio
  const [fields, setFields] = useState({});

  return (
    {/* Gestionamos el evento onSubmit del formulario 
      y ejecutamos un callback recibido del padre <Home /> 
      para añadir una nueva tarea al formulario. Por tanto le pasamos los
      datos almacenados en este nivel "hacia arriba" (LIFTING). Le pasare el title y la description
    */}
    <form
      onSubmit={e => {
        e.preventDefault();
        onAddTask({
          title: fields.title,
          description: fields.description
        });
        setFields({ title: "", description: "" });
      }}
    >
      {/* A cada <Field /> le pasaré la props que necesito para definir su interfaz
         Además le paso un callback para que me permita actualizar el dato que contiene su input
         en este nivel a través de setFields
      */}
      <Field
        id="title"
        type="text"
        title="Title"
        placeholder="Enter your title"
        value={fields.title}
        onFieldChange={title => setFields({ ...fields, title })}
      />
      <Field
        id="description"
        type="textarea"
        title="Description"
        placeholder="Enter your description"
        value={fields.description}
        onFieldChange={description => setFields({ ...fields, description })}
      />
      <button
        type="submit"
        className="btn btn-success"
        disabled={!fields.title || (fields.title && fields.title.length < 5)}
      >
        Add task
      </button>
    </form>
  );
}

export { Form };
