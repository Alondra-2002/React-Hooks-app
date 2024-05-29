import { createContext } from "react";

/**
 * Crea un contexto para manejar el estado del usuario en la aplicación.
 * 
 * `UserContext` proporciona una manera de compartir datos de usuario
 * a lo largo del árbol de componentes sin la necesidad de pasar props
 * manualmente en cada nivel.
 * 
 * El valor inicial es `undefined` hasta que se proporcione un valor
 * en un componente de contexto (UserContext.Provider).
 */
export const UserContext = createContext();
