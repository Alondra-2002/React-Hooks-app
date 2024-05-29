import { Routes, Route, Navigate, Link } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";

import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AbautPage } from "./AboutPage";
import { Navbar } from "./Navbar";


export const MainApp = () => {
  return (
    <UserProvider>
    {/*<h1>MainApp</h1>*/}
    {/*<Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>*/}

    <Navbar/>
    <hr />

    <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="login" element={ <LoginPage/>} />
        <Route path="abaut" element={ <AbautPage/>} />

        <Route path="/*" element={ <Navigate to="/abaut"/>} />
    </Routes>
    </UserProvider>
  )
}
