// Importa useMemo y useState desde React, y el hook useCounter desde '../hooks'.
import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

// Función pesada que simula un proceso intensivo.
const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('¡Ahí vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

// Define el componente MemoHook.
export const MemoHook = () => {

    // Utiliza el hook useCounter para gestionar el estado del contador.
    const { counter, increment } = useCounter(1000);

    // Utiliza el hook useState para gestionar el estado del componente de mostrar/ocultar.
    const [show, setShow] = useState(true);

    // Utiliza el hook useMemo para memorizar el valor de heavyStuff.
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del componente con el valor del contador */}
            <h1>Counter : <small>{counter}</small> </h1>
            <hr />

            {/* Muestra el valor memorizado de heavyStuff */}
            <h4>{memorizedValue}</h4>

            {/* Botón para incrementar el contador */}
            <button className="btn btn-primary" onClick={() => increment()}> + 1</button>
   
            {/* Botón para mostrar/ocultar el valor memorizado */}
            <button className='btn btn-primary' onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}


