import { TodoItem } from "./TodoItem";

/**
 * Componente TodoList
 * Representa una lista de tareas, renderizando cada tarea con el componente TodoItem.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.todos - Lista de tareas.
 * @param {Function} props.onDeleteTodo - Función para eliminar una tarea.
 * @param {Function} props.onToggleTodo - Función para marcar una tarea como completada o pendiente.
 */
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {
        // Mapea cada tarea en la lista de tareas y renderiza un TodoItem
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo} 
          />
        ))
      }
    </ul>
  )
}
