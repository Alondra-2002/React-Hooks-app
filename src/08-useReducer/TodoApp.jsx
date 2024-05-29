/*Este componente, TodoApp, es una aplicación de gestión de tareas que permite a los 
usuarios agregar, eliminar y marcar tareas como completadas. Utiliza hooks 
personalizados (useTodos) para manejar el estado y las acciones relacionadas con las tareas.*/

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

// NOTA IMPORTANTE: En 'TODO' (todo) no debo dejar espacios porque si no, no funciona.

export const TodoApp = () => {

    // Utiliza el hook personalizado useTodos para manejar el estado y las acciones de las tareas.
    const {
        todos, // Array de tareas.
        todosCount, // Número total de tareas.
        pendingTodosCount, // Número de tareas pendientes.
        handleDeleteTodo, // Función para eliminar una tarea.
        handleNewTodo, // Función para agregar una nueva tarea.
        handleToggleTodo // Función para marcar una tarea como completada o pendiente.
    } = useTodos();

    return (
    <>
        <h1>TodoApp: { todosCount },<small> Pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* Lista de tareas */}
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
            </div> 

            <div className="col-5">
                <h4> Agregar TODO </h4>
                <hr />
                {/* Componente para agregar nuevas tareas */}
                <TodoAdd 
                    onNewTodo={ handleNewTodo }
                />
            </div>
        </div>
    </>
    )
}
