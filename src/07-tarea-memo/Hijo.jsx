// Importa React desde React.
import React from "react";

// Define el componente Hijo utilizando React.memo para memorizar su renderizado.
export const Hijo = React.memo(({ numero, incrementar }) => {

    // Imprime un mensaje en la consola cada vez que el componente se renderiza.
    console.log('Me volví a generar :( ');

    // Retorna la estructura del componente.
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    );
});
