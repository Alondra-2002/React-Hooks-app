import { Link, NavLink } from "react-router-dom";

/**
 * `Navbar` es un componente funcional de React que representa una barra de navegación.
 * Contiene enlaces a las páginas principales de la aplicación: "Home", "About" y "Login".
 * Utiliza los componentes `Link` y `NavLink` proporcionados por `react-router-dom` para
 * permitir la navegación entre las diferentes páginas de la aplicación.
 * 
 * @returns {JSX.Element} El componente que representa la barra de navegación.
 */
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Enlace al inicio de la aplicación */}
        <Link className="navbar-brand" to="/">useContext</Link>

        {/* Contenido de la barra de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Enlace a la página Home */}
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/"
            >
              Home
            </NavLink>
            {/* Enlace a la página About */}
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/about"
            >
              About
            </NavLink>
            {/* Enlace a la página Login */}
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/login"
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
