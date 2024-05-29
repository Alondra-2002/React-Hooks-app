import { useState } from "react";
import { UserContext } from "./UserContext";

/**
 * `UserProvider` es un componente de proveedor de contexto que maneja
 * el estado del usuario y proporciona dicho estado y una función para
 * actualizarlo a todos los componentes hijos que lo necesiten.
 * 
 * @param {Object} props - Los props recibidos por el componente.
 * @param {React.ReactNode} props.children - Los componentes hijos que
 * serán envueltos por el proveedor de contexto.
 * @returns {JSX.Element} El componente de proveedor de contexto.
 */
export const UserProvider = ({ children }) => {
    // Estado inicial del usuario. Aquí podría estar vacío o contener datos predeterminados.
    const [user, setUser] = useState();

    return (
        // Proveedor de contexto que pasa el estado del usuario y la función de actualización a los componentes hijos.
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

