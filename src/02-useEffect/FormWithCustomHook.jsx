// Importa el hook useEffect de React para realizar efectos secundarios.
import { useEffect } from 'react';

// Importa el hook 
import { useForm } from '../hooks/useForm';

// Define el componente FormWithCustomHook.
export const FormWithCustomHook  = () => {

    // Utiliza el hook useForm para gestionar el estado del formulario y las funciones relacionadas.
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });
    
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
            <h1> Formulario con custom hook </h1>
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

            <input 
                type="password" 
                className="form-control mt-2" 
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            {/* Botón para resetear el formulario */}
            <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
        </>
    )
}
