import { useState, useEffect } from 'react';
import { getTasks, addTask, removeTask, updateTask } from '../http/taskService';

// Custom hook para gestionar datos de interfaz y comunicación con
// los endpoint REST que haya definido en mi backend
export function useTasksWithState() {
  // 1) CREAR ESTADOS
  // Definiré los diferentes estado que quiero gestionar
  // Pueden ser uno o muchos. Los que necesite
  // Haré return de estos estados al final de esta función
  const [tasks, setTasks] = useState([]);

  // 2) RECUPERAR DATOS
  // Si necesito obtener datos del backend lo hago en un hook useEffect
  // Recordar el segundo parámetro [] que indica que sólo se ejecute una vez
  useEffect(() => {
    getTasks().then(({ data }) => setTasks(data));
  }, []);

  // 3) FUNCIONES PARA MODIFICAR EL ESTADO
  // Defino una serie de funciones que me permitén modificar el estado y/o
  // acceder a mi servidor
  const handleAddTask = async task => {
    // Añado datos en el back
    const { data } = await addTask(task);
    // Cambio el estado
    setTasks([data, ...tasks]);
  };

  const handleCompleteTask = async id => {
    // Antes de actualizar mi backend recupero y modifico el objeto
    // que voy a enviar como BODY
    const completedTask = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    });

    // Modifico datos en el back
    await updateTask(completedTask.find(task => task.id === id));

    // Cambio el estado
    setTasks(completedTask);
  };

  const handleRemoveTask = async id => {
    // Elimino datos en el back
    await removeTask(id);

    // Cambio el estado
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 4) DEVUELVO ESTADOS Y LAS FUNCIONES PARA MODIFICARLO
  // Devuelvo todo lo que quiero utilizar desde mis componentes
  return {
    tasks,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask
  };
}
