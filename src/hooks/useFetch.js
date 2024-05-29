// Importa useEffect y useState desde React.
import { useEffect, useState } from 'react';

// Objeto para almacenar en caché los datos de las solicitudes.
const localCache = {};

// Define el hook useFetch.
export const useFetch = (url) => {

    // Utiliza el hook useState para gestionar el estado del fetch.
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    // Función para establecer el estado de carga.
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });
    }

    // Dispara la petición cada vez que la URL cambia.
    useEffect(() => {
        getFetch();
    }, [url]);

    // Función para realizar la solicitud fetch.
    const getFetch = async () => {

        // Si la URL está en la caché, utiliza los datos de la caché.
        if (localCache[url]) {
            console.log('Usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        // Establece el estado de carga.
        setLoadingState();

        // Realiza la solicitud fetch a la URL.
        const resp = await fetch(url);

        // Simula un retraso de 100ms para emular un tiempo de carga.
        await new Promise(resolve => setTimeout(resolve, 100));

        // Si la respuesta no es exitosa, establece el estado de error.
        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        }

        // Convierte la respuesta en formato JSON.
        const data = await resp.json();

        // Establece el estado con los datos obtenidos.
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        // Almacena los datos en la caché.
        localCache[url] = data;
    }

    // Retorna los datos, el estado de carga y el estado de error.
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
