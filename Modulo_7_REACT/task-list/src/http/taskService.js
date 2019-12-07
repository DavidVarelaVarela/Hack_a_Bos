import axios from 'axios';

// Configuración de acceso a un recurso REST. Si tengo más lo añado en otros archivos
// Si tengo bien configurado mi backend normalmente ese servidor Express que representará
// mis endpoints reponderá en cada recurso /${resourceName} a los métodos GET, POST, PUT, DELETE al menos
// Esa comunucación es la que establecemos en este archivo
const BASE_URL = 'https://5dda901c5730550014fe78e2.mockapi.io/api/v1';

// Recupero las tareas y devuelvo una Promise
export function getTasks() {
  return axios.get(`${BASE_URL}/todo`);
}

/**
 * Añado una tarea. El segundo parametro es el BODY del post
 */
export function addTask(task) {
  return axios.post(`${BASE_URL}/todo`, { ...task });
}

/**
 * Modifico las tareas. El segundo parametro es el BODY del post
 */
export function updateTask(task) {
  return axios.put(`${BASE_URL}/todo/${task.id}`, { ...task });
}

/**
 * Elimino una tarea
 */
export function removeTask(id) {
  return axios.delete(`${BASE_URL}/todo/${id}`);
}
