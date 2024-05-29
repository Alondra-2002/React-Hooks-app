
// Importa el componente Hijo desde './Hijo' y el hook useCallback desde React.
import { Hijo } from './Hijo';
import { useCallback, useState } from 'react';

// Define el componente Padre.
export const Padre = () => {

    // Define un array de números.
    const numeros = [2, 4, 6, 8, 10];

    // Utiliza el hook useState para gestionar el estado del valor.
    const [valor, setValor] = useState(0);

    // Utiliza el hook useCallback para memorizar la función incrementar.
    const incrementar = useCallback(
        (num) => {
            // Incrementa el valor con el número proporcionado.
            setValor((oldvalue) => oldvalue + num);
        },
        [],
    );

    // Retorna la estructura del componente.
    return (
        <div>
            {/* Título del componente Padre */}
            <h1>Padre</h1>
            
            {/* Muestra el total del valor */}
            <p> Total: {valor} </p>
            <hr />

            {/* Renderiza el componente Hijo para cada número en el array */}
            {numeros.map((n) => (
                <Hijo 
                    key={n}
                    numero={n}
                    incrementar={incrementar}
                />
            ))}
        </div>
    );
}
