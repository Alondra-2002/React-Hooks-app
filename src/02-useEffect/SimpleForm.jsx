// Importa useState y useEffect desde React.
import { useState, useEffect } from 'react';

// Importa el componente Message desde './Message'.
import { Message } from './Message';

// Define el componente SimpleForm.
export const SimpleForm  = () => {

    // Define el estado inicial del formulario utilizando el hook useState.
    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'alo@google.com'
    });

    // Extrae las propiedades 'username' y 'email' del estado del formulario.
    const { username, email } = formState;

    // Función para manejar los cambios en los inputs del formulario.
    const onInputChange = ( { target} ) => {
        const { name, value } = target;
        // Actualiza el estado del formulario con los nuevos valores.
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    // Define efectos secundarios utilizando el hook useEffect.

    // useEffect que se ejecuta solo una vez al renderizar el componente.
    useEffect(() => {
        //console.log( 'useEffect called!' );
    }, []);

    // useEffect que se ejecuta cada vez que el valor de 'email' cambia.
    useEffect(() => {
         //console.log( 'email changed!' );
    }, [email]); 

    // useEffect que se ejecuta cada vez que el estado del formulario (formState) cambia.
    useEffect(() => {
        //console.log( 'formState changed!' );
    }, [formState]);

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del formulario */}
            <h1> Formulario simple </h1>
            <hr/>

            {/* Inputs del formulario */}
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2" 
                placeholder="alo@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {/* Renderiza el componente Message si el username es 'strider2' */}
            { (username === 'strider2') && <Message/> }
        </>
    )
}
