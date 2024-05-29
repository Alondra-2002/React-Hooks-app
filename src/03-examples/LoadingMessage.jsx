// Importa React para poder definir componentes.
import React from 'react';

// Define el componente LoadingMessage.
export const LoadingMessage = () => {
    // Retorna la estructura del componente.
    return (
        <section
            style={{ height: 200 }} // Estilo en línea para establecer la altura del componente.
            className='alert alert-info text-center p-0 m-0 d-flex align-items-center justify-content-center'> {/* Clases de Bootstrap para estilizar el componente */}
            <h1> Cargando...</h1> {/* Texto de carga */}
        </section>
    )
}

