
/**
 * Componente TodoItem
 * Representa un elemento individual de la lista de tareas con funcionalidades para marcar como completada y eliminar.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.todo - Objeto que representa la tarea.
 * @param {Function} props.onDeleteTodo - Función para eliminar la tarea.
 * @param {Function} props.onToggleTodo - Función para marcar la tarea como completada o pendiente.
 */
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {/* Texto de la tarea con un estilo diferente si está completada */}
      <span 
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>

      {/* Botón para eliminar la tarea */}
      <button 
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}

