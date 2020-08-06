import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


// tengo un argumento que lo quiero enviar
// por un callback y el primer argumento
// que regresa el forEach es el mismo
// que le pasamos a la función crearTodoHtml
// por lo tanto podemos poner solo el nombre de
// la función.

todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);