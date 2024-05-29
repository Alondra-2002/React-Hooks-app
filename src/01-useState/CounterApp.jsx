// Este componente React implementa un contador simple con tres contadores diferentes.

// Importa el hook useState de React para manejar el estado.
import { useState } from 'react';

// Definición del componente CounterApp.
export const CounterApp = () =>  {

    // Usa el hook useState para inicializar el estado del componente con tres contadores.
    const [state, setCounter] = useState({
      Counter1: 10,
      Counter2: 20,
      Counter3: 30,
    });

    // Desestructura el estado para acceder a los valores de cada contador.
    const {Counter1, Counter2, Counter3} = state;

    // Retorna la estructura del componente.
    return (
        <> 
            {/* Muestra los valores de los contadores en etiquetas <h1>. */}
            <h1>Counter1: {Counter1}</h1>
            <h1>Counter2: {Counter2}</h1>
            <h1>Counter3: {Counter3}</h1>

            {/* Agrega una línea horizontal para separar visualmente los contadores de los botones. */}
            <hr />

            {/* Botón que incrementa el valor de Counter1 en 1 cuando se hace clic. */}
            <button className='btn' onClick={ 
                () => setCounter ({
                    ...state,
                    Counter1: Counter1 + 1, 
                })
            }>+1</button>   
        </>
    )
}

