// Importa useState desde React y el hook useCounter desde '../hooks'.
import { useState } from 'react';
import { useCounter } from '../hooks';

// Importa el componente Small desde './Small'.
import { Small } from './Small';

// Define el componente Memorize.
export const Memorize = () => {

    // Utiliza el hook useCounter para gestionar el estado del contador.
    const { counter, increment } = useCounter(10);

    // Utiliza el hook useState para gestionar el estado del componente de mostrar/ocultar.
    const [show, setShow] = useState(true);

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del componente con el valor del contador */}
            <h1>Counter : <Small value={ counter }/></h1>
            <hr />

            {/* Botón para incrementar el contador */}
            <button className="btn btn-primary" onClick={() => increment()}> + 1</button>
   
            {/* Botón para mostrar/ocultar el componente Small */}
            <button className='btn btn-primary' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
