import React from 'react';
import { TaskListItem } from './TaskListItem';

function TaskList({ tasks = [], onComplete, onRemove }) {
  // <TaskList /> simplemente se encarga de iterar sobre las tareas y generar para
  // cada una un <TaskListItem />
  // Para iterar sobre array en React usaremos siempre map()
  // Además envía los callback para modificar y eliminar tareas al hijo
  // El viaje de estos callbacks es <Home /> -> <TaskList /> -> <TaskListItem />
  // En <TaskListItem /> se ejecutarán al pulsar sobre los botones
  return tasks.map(task => (
    <TaskListItem
      key={task.id}
      task={task}
      onComplete={onComplete}
      onRemove={onRemove}
    />
  ));
}

export { TaskList };
