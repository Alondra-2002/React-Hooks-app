/*Este componente, TodoAdd, es un formulario utilizado para agregar nuevas tareas 
(todos) a una lista. Utiliza un hook personalizado (useForm) para manejar el estado 
del formulario y proporciona una función para enviar la nueva tarea al componente padre. */

import { useForm } from '../hooks/useForm';

/**
 * Componente TodoAdd
 * @param {Function} onNewTodo - Función que se llama cuando se agrega una nueva tarea.
 */
export const TodoAdd = ({ onNewTodo }) => {

    // Usa el hook personalizado useForm para manejar el estado del formulario.
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    /**
     * Maneja el envío del formulario.
     * @param {Event} event - El evento de envío del formulario.
     */
    const onFormSubmit = (event) => {
        event.preventDefault();

        // Verifica que la descripción tenga más de un carácter.
        if (description.length <= 1) return;

        // Crea una nueva tarea con la descripción ingresada.
        const newTodo = {
            id: new Date().getTime(), // Identificador único basado en la fecha y hora actual.
            done: false, // Estado inicial de la tarea como no completada.
            description: description, // Descripción de la tarea.
        }

        // Llama a la función onNewTodo pasada como prop para agregar la nueva tarea.
        onNewTodo(newTodo);

        // Resetea el formulario.
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?" 
                className="form-control"
                name='description'
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
