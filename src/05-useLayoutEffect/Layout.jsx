// Importa los hooks useCounter y useFetch desde '../hooks', y los componentes LoadingMessage y PokemonCard desde '../03-examples'.
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from '../03-examples';
import { PokemonCard } from '../03-examples';

// Define el componente Layout.
export const Layout = () => {

    // Utiliza el hook useCounter para gestionar el estado del contador.
    const { counter, decrement, increment} = useCounter(1);

    // Utiliza el hook useFetch para realizar una solicitud a la API de Pokémon.
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    // Retorna la estructura del componente.
    return (
        <>
            {/* Título del componente */}
            <h1>Informacion de pokemon</h1>
            <hr />

            {/* Muestra un mensaje de carga si isLoading es true, de lo contrario, muestra el componente PokemonCard */}
            { isLoading ? <LoadingMessage/>
            : <PokemonCard 
                id={ counter } 
                name={ data.name }
                sprites={ [
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny
                ] }   
            />}

            {/* Botón para retroceder al pokemon anterior */}
            <button 
                className='btn btn-primary mt-2'
                onClick={() => counter > 1 ? decrement() : null }>
                Anterior 
            </button>

            {/* Botón para avanzar al siguiente pokemon */}
            <button 
                className='btn btn-primary mt-2'
                onClick={() => increment() }>
                Siguiente
            </button>
        </>
    )
}
