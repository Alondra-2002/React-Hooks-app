import { useContext } from "react";
import { UserContext } from "./context/UserContext";

/**
 * `LoginPage` es un componente funcional de React que representa la página de inicio de sesión.
 * Utiliza el contexto `UserContext` para acceder al estado del usuario y la función `setUser`
 * para actualizar ese estado. Muestra los detalles del usuario en formato JSON y proporciona
 * un botón para establecer un usuario ficticio con valores predefinidos.
 * 
 * @returns {JSX.Element} El componente que representa la página de inicio de sesión.
 */
export const LoginPage = () => {
    // Acceder al estado del usuario y la función setUser desde el contexto
    const { user, setUser } = useContext(UserContext);
    
    return (
        <>
            {/* Título de la página */}
            <h1>LoginPage</h1>
            {/* Línea horizontal para separar el contenido */}
            <hr />
            {/* Detalles del usuario en formato JSON */}
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            {/* Botón para establecer un usuario ficticio */}
            <button className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Juan', email: 'alo@gmail.com' })}
            >
                Establecer usuario
            </button>
        </>
    );
};
