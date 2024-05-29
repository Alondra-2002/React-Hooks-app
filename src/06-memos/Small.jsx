// Importa React desde React.
import React from 'react';

// Define el componente Small utilizando React.memo para memorizar su renderizado.
export const Small = React.memo(({ value }) => {

    // Imprime un mensaje en la consola cada vez que el componente se renderiza.
    console.log('Me volví a dibujar');

    // Retorna la estructura del componente.
    return (
        <small> { value } </small>
    );
});
