// Importa los hooks useCallback, useEffect y useState desde React, y el componente ShowIncrement desde "./ShowIncrement".
import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

// Define el componente CallbackHook.
export const CallbackHook = () => {

    // Utiliza el hook useState para gestionar el estado del contador.
    const [counter, setCounter] = useState(10);

    // Utiliza el hook useCallback para memorizar la función incrementFather.
    const incrementFather = useCallback(
        ( value ) => {
            setCounter( ( c ) => c + value );
        }, [],
    );

    // Utiliza el hook useEffect para realizar efectos secundarios cuando incrementFather cambia.
    useEffect(() => {
       // incrementFather();
    }, [incrementFather])

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del componente */}
            <h1> useCallback hook: { counter } </h1>
            <hr />

            {/* Renderiza el componente ShowIncrement con la función incrementFather como prop */}
            <ShowIncrement increment={ incrementFather }/>
        </>
    )
}

