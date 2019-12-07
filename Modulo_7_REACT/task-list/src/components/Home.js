import React from 'react';
import { Form } from './Form';
import { TaskList } from './TaskList';
// import { useTasksWithReducer } from '../hooks/useTasksWithReducer';
import { useTasksWithState } from '../hooks/useTasksWithState';

/**
 * Componente principal de la ruta "/"
 */
export default function Home() {
  // A través de un custom hook obtengo los datos que necesito
  // y los métodos para modificarlos
  const {
    tasks,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask
  } = useTasksWithState();
  // } = useTasksWithReducer();

  // Es importante tener en cuenta que siempre necesito un nodo del que colgarme
  // para representar mi componente. Si no lo tengo y no quiero añadir elementos
  // como un <div /> para cumplir con el requisito de React, puedo usar React.Fragment
  return (
    <React.Fragment>
      {/* El componente <Form /> se encarga de añadir tareas
          Le paso un callback para que uno de sus elementos lo ejecute cuando 
          sea necesario. En este caso lo hará el botón de añadir que contiene <Form />
          Este mecanismo de comunicación del hijo al padre se denomina LIFTING y permitirá
          a <Home /> saber que dicho botón se ha pulsado
     */}
      <Form onAddTask={handleAddTask} />
      <hr />
      <div className="row">
        <div className="col-12 col-sm-6 mt-4">
          <h3>Task</h3>
          <hr />
          {/* En este caso en <TaskList /> estoy enviando por props la lista de tareas
             y además dos callbacks con el objetivo de que <Home /> sepa que se han pulsado
             los botones de completar o eliminar una tarea */}
          <TaskList
            tasks={tasks.filter(task => !task.completed)}
            onComplete={handleCompleteTask}
            onRemove={handleRemoveTask}
          />
        </div>
        <div className="col-12 col-sm-6 mt-4">
          <h3>Completed task</h3>
          <hr />
          <TaskList
            tasks={tasks.filter(task => task.completed)}
            onComplete={handleCompleteTask}
            onRemove={handleRemoveTask}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
