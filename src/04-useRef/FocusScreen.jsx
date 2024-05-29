// Importa el hook useRef desde React.
import { useRef } from 'react';

// Define el componente FocusScreen.
export const FocusScreen = () => {

    // Utiliza el hook useRef para crear una referencia al input.
    const inputRef = useRef();

    // Función para manejar el clic en el botón "Set focus".
    const onClick = () => {
        // Selecciona el input utilizando la referencia.
        inputRef.current.select();
    }

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del componente */}
            <h1> Focus screen </h1>
            <hr />

            {/* Input con referencia al inputRef */}
            <input 
                ref={ inputRef }
                type="text" 
                placeholder="Ingrese su nombre" 
                className="form-control" 
            />

            {/* Botón para establecer el foco en el input */}
            <button 
                className="btn btn-primary mt-2"
                onClick={ onClick }> 
                Set focus
            </button>
        </>
    )
}
