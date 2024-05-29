// Importa React desde React.
import React from "react";

// Define el componente ShowIncrement utilizando React.memo para memorizar su renderizado.
export const ShowIncrement = React.memo(({ increment }) => {
  
    // Imprime un mensaje en la consola cada vez que el componente se renderiza.
    console.log('Me volví a generar');

    // Retorna la estructura del componente.
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                // Llama a la función increment pasada como prop, incrementando en 5.
                increment(5);
            }}
        >
            Incrementar
        </button>
    );
});
