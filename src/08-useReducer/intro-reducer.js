// Estado inicial: una lista con una tarea
const initialState = [{
    id: 1, // Identificador único de la tarea
    todo: 'Recolectar la piedra del alma',  // Descripción de la tarea
    done: false, // Indica si la tarea ha sido completada (true) o no (false)
}];

// Definición del reducer para manejar las acciones relacionadas con la lista de tareas
const todoReducer = (state = initialState, action = {}) => {

    // Comprueba si la acción es para agregar una nueva tarea
    if (action.type === '[TODO] add todo') {
        // Devuelve una nueva lista de tareas con la nueva tarea agregada
        return [...state, action.payload];
    }

    // Si la acción no es reconocida, devuelve el estado actual sin cambios
    return state;
}

// Inicializa la lista de tareas usando el reducer sin ninguna acción
let todos = todoReducer();

// Nueva tarea que se va a agregar a la lista
const newTodo = {
    id: 2, 
    todo: 'Recolectar la piedra del poder', // Descripción de la nueva tarea
    done: false, // La tarea no está completada inicialmente
}

/* 
// agregaría una tarea directamente a la lista, 
// lo cual no es una buena práctica ya que muta el estado directamente.
todo.push({
    id: 2,  
    todo: 'Recolectar la piedra del poder',
    done: false,  
}); 
*/

// Acción para agregar una nueva tarea a la lista
const addTodoAction = {
    type: '[TODO] add todo', // Tipo de acción que indica que se va a agregar una nueva tarea
    payload: newTodo, // La nueva tarea que se va a agregar
}

// Actualiza la lista de tareas usando el reducer con la acción de agregar
todos = todoReducer(todos, addTodoAction);

// Imprime el estado actual de la lista de tareas en la consola
console.log({ state: todos });
