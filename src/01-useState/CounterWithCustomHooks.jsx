// Importa el hook 
import { useCounter } from '../hooks/useCounter';

// Exporta el componente CounterWithCustomHooks.
export const CounterWithCustomHooks = () => {

    // Usa el hook useCounter para obtener el estado del contador y las funciones para incrementar, decrementar y reiniciar.
    const { counter, increment, decrement, reset } = useCounter(); 

    // Retorna la estructura del componente.
    return (
        <>
            {/* Muestra el valor del contador en un encabezado <h1>. */}
            <h1> Counter with Hooks: {counter}</h1>
            <hr />

            {/* Botón que incrementa el contador en 1 cuando se hace clic. */}
            <button onClick={ increment } className="btn btn-primary">+1</button>
            {/* Botón que reinicia el contador a su valor inicial cuando se hace clic. */}
            <button onClick={ reset} className="btn btn-primary">reset</button>
            {/* Botón que decrementa el contador en 1 cuando se hace clic. */}
            <button onClick={ decrement }  className="btn btn-primary">-1</button>
        </>
    )
}

// Exporta el componente CounterWithCustomHooks como predeterminado.
export default CounterWithCustomHooks;
