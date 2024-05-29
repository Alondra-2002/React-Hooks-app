// Importa React y el hook useEffect de React.
import React, { useEffect } from 'react';

// Define el componente Message.
export const Message = () => {

    // Utiliza el hook useEffect para realizar efectos secundarios.
    useEffect(() => {
        
        // Define la función onMouseMove que se ejecutará cuando ocurra el evento 'mousemove'.
        const onMouseMove = ({x, y}) => {
            // Captura las coordenadas x e y del evento y las guarda en un objeto coords.
            const coords = {x, y};
            // Imprime las coordenadas en la consola.
            console.log(coords);
        }
        
        // Agrega un event listener para el evento 'mousemove' que llamará a la función onMouseMove.
        window.addEventListener( 'mousemove', onMouseMove);

        // Define la función de limpieza para remover el event listener cuando el componente se desmonte.
        return () => {
            window.removeEventListener( 'mousemove', onMouseMove);
        }
    }, []); // El array vacío indica que este efecto se ejecuta solo una vez, al montar el componente.

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del mensaje */}
            <h3>El usuario ya existe</h3>
        </>
    )
}


 
    //METODO 2 
    //const [coords, setCoords] = useState ({ x:0, y:0});

    //useEffect(() => {
    //    const onMouseMove = ({x,y}) => {
           // setCoords ({x, y})
    //    }
    //    window.addEventListener('mousemove', onMouseMove);
        
    //    return() => {
    //        window.removeEventListener('mousemove', onMouseMove);
    //    }
    //}, []);

    //return(
    //    <>
    //    <h3>El usuario ya existe</h3>
    //    {JSON.stringify(coords)}
    //    </>
    //)
//}

    