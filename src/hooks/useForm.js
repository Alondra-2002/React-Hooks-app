// Importa useState desde React.
import { useState } from 'react';

// Define el hook useForm para gestionar el estado de un formulario.
export const useForm = (initialForm = {}) => {
  
    // Utiliza el hook useState para gestionar el estado del formulario.
    const [formState, setFormState] = useState(initialForm);

    // Función para manejar el cambio de un campo del formulario.
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // Actualiza el estado del formulario con el nuevo valor del campo.
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // Función para restablecer el formulario a su estado inicial.
    const onResetForm = () => {
        // Restablece el estado del formulario al estado inicial proporcionado.
        setFormState(initialForm);
    }

    // Retorna el estado del formulario, la función de cambio de entrada y la función de restablecimiento del formulario.
    return {
        ...formState,
        onInputChange,
        onResetForm,
    }
}

