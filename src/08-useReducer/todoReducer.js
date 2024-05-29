/**
 * Función reducer para manejar el estado de las tareas (todos).
 * 
 * @param {Array} initialState - El estado inicial de las tareas.
 * @param {Object} action - El objeto de acción que describe el tipo de cambio y los datos necesarios.
 * @param {string} action.type - El tipo de acción a realizar.
 * @param {any} action.payload - Los datos necesarios para realizar la acción.
 * @returns {Array} - El nuevo estado de las tareas después de aplicar la acción.
 */
export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            // Agrega una nueva tarea al estado
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            // Elimina una tarea del estado
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            // Alterna el estado de una tarea entre completada y pendiente
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });

        default:
            // Retorna el estado sin cambios si la acción no es reconocida
            return initialState;
    }
};
