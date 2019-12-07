import React from 'react';

function TaskListItem({ task, onComplete, onRemove }) {
  // <TaskListItem se encarga de generar el jSX necesario para mostrar una tarjeta
  // representado una tarea
  // Recibe de su padre la tarea y los metodos para modificarla
  // Es donde ejecutamos finalmente las callbacks que recibiamos de <Home /> y posteriormente de <TaskList />
  // Cuando ejecutamos el callback lo hacemos pasándole un dato, en este caso el id. Esta callback se
  // ejecuta por tanto en su origen <Home /> porque asi es como funciona Javascript y el paso de funciones como parámetros
  return (
    <div className="card mt-3">
      <h5 className="card-header">{task.title}</h5>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <span className="badge badge-primary">1 hour ago</span>
        </p>
        {/* Esta es la sintaxis habitual junto con expresiones ternarias para
            Mostrar o ocultar partes del JSX devuelto por el render
            Si la primera parte de la expresión (!task.completed) evalúa a false entonces 
            la segunda parte no se evalúa o ejecuta, por tanto el componente sólo se muestra si 
            la tarea no está ya completada
         */}
        {!task.completed && (
          <a
            className="btn btn-outline-success"
            onClick={() => onComplete(task.id)}
          >
            Complete
          </a>
        )}
        <a
          className="btn btn-outline-danger ml-2"
          onClick={() => onRemove(task.id)}
        >
          Remove
        </a>
      </div>
    </div>
  );
}

export { TaskListItem };
