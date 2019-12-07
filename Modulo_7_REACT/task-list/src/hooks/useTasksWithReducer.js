import { useReducer, useEffect } from 'react';
import { getTasks, addTask, removeTask, updateTask } from '../http/taskService';

// Definiré como constantes las acciones que quiero usar
const SET_TASKS = 'SET_TASKS';
const COMPLETE_TASK = 'COMPLETE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const ADD_TASK = 'ADD_TASK';

// Las funciones de tipo reducer se ejecutan siempre
// cuando se produce un dispatch({ type: ACTION, ... })
// El primer parámetro es el estado actual y el segundo la action
function taskReducer(currentState, action) {
  // A través de un switch evalúo cual es la acción
  // que me ha llegado y en función del type de dicha acción
  // y del resto de datos que contiene dicha acción
  // devuelvo un nuevo estado
  // React detectará la modificación en el estado y actualizará
  // la interfaz del usuario en consecuencia
  switch (action.type) {
    case SET_TASKS:
      return action.tasks;
    case COMPLETE_TASK:
      return currentState.map(task => {
        if (task.id === action.completedTask.id) {
          return action.completedTask;
        }
        return task;
      });
    case REMOVE_TASK:
      return currentState.filter(task => task.id !== action.id);
    case ADD_TASK:
      return [action.task, ...currentState];
    default:
      // Cuando no es una acción conocida entonces
      // devuelvo el estado actual de nuevo
      return currentState;
  }
}

// Custom hook para gestionar datos de interfaz y comunicación con
// los endpoint REST que haya definido en mi backend
export function useTasksWithReducer() {
  // 1) CREAR ESTADOS
  // Definiré los diferentes estado que quiero gestionar
  // Pueden ser uno o muchos. Los que necesite
  // Haré return de estos estados al final de esta función

  // Usamos useReducer para inicializar el estado y especificar la funcion reducer a utilizar
  // El primer parámetro es la función reducer a utilizar y el segundo el estado inicial
  // useReducer devuelve un array con 2 posiciones
  //  - Estado actual (Normalmente lo llamaremos state)
  //  - Funcion para modificarlo (Normalmente la llamaremos dispatch)
  const [state, dispatch] = useReducer(taskReducer, []);

  // 2) RECUPERAR DATOS
  // Si necesito obtener datos del backend lo hago en un hook useEffect
  // Recordar el segundo parámetro [] que indica que sólo se ejecute una vez
  useEffect(() => {
    // A dispatch le paso un objeto con al menos una propiedad con nombre type
    // { type: M?Y_ACTION, ... }
    // Le paso tambien otras propiedades quiera que reciba el reducer, en este caso task
    getTasks().then(({ data }) => dispatch({ type: SET_TASKS, tasks: data }));
  }, []);

  // 3) FUNCIONES PARA MODIFICAR EL ESTADO
  // Defino una serie de funciones que me permitén modificar el estado y/o
  // acceder a mi servidor
  const handleAddTask = async task => {
    // Añado datos en el back
    const { data } = await addTask(task);
    // Cambio el estado. Se ejecutará taskReducer
    // con el estado actual como primer parametro y con
    // { type: ADD_TASK, task: data } como segundo parametro
    dispatch({ type: ADD_TASK, task: data });
  };

  const handleCompleteTask = async id => {
    // Antes de actualizar mi backend recupero y modifico el objeto
    // que voy a enviar como BODY
    const completedTask = state.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    });

    // Modifico datos en el back
    await updateTask(completedTask.find(task => task.id === id));

    // Cambio el estado. Se ejecutará taskReducer
    // con el estado actual como primer parametro y con
    // { type: COMPLETE_TASK, completedTask } como segundo parametro
    dispatch({ type: COMPLETE_TASK, completedTask });
  };

  const handleRemoveTask = async id => {
    // Modifico datos en el back
    await removeTask(id);

    // Cambio el estado. Se ejecutará taskReducer
    // con el estado actual como primer parametro y con
    // { type: REMOVE_TASK, id } como segundo parametro
    dispatch({ type: REMOVE_TASK, id });
  };

  // 4) DEVUELVO ESTADOS Y LAS FUNCIONES PARA MODIFICARLO
  // Devuelvo todo lo que quiero utilizar desde mis componentes
  return {
    tasks: state,
    handleAddTask,
    handleCompleteTask,
    handleRemoveTask
  };
}
