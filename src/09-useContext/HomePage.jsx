import { useContext } from "react";
import { UserContext } from "./context/UserContext";

/**
 * `HomePage` es un componente funcional de React que representa la página principal de la aplicación.
 * Utiliza el contexto `UserContext` para acceder al estado del usuario y mostrar su nombre en el título
 * de la página. Además, muestra los detalles del usuario en formato JSON en un elemento `<pre>`.
 * 
 * @returns {JSX.Element} El componente que representa la página principal.
 */
export const HomePage = () => {
    // Acceder al estado del usuario desde el contexto
    const { user } = useContext(UserContext);

    return (
        <>
            {/* Título de la página con el nombre del usuario */}
            <h1>HomePage <small>{user?.name}</small></h1>
            {/* Línea horizontal para separar el contenido */}
            <hr />
            {/* Detalles del usuario en formato JSON */}
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    );
};
