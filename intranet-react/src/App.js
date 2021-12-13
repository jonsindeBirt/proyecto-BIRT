import "./App.css";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Directorio from "./components/ventanaDirectorio";
import Calendario from "./components/calendarioDirectorio";
import useAuth from "./hooks/useAuth";
import FormularioTablon from "./components/ventanaAltaAnuncios";
import ListadoEmpleados from "./rrhh/ventanaListadoEmpleados";
import AnyadirEmpleado from "./rrhh/alta-empleados";
import React from "react";

function App() {
  // esto es un hook personalizado. lo usamos para verificar si el usuario esta logueado o no
  const { authState, setAuthState } = useAuth();

  // comprobamos si el usuario esta logueado o no
  if (!authState) {
    /**
     * Usamos Routes para agrupar las rutas que tendrá nuestra aplicación.
     * Cuando haya un cambio en la ruta del navegador, si coincide con alguna de las rutas, se ejecutará el componente correspondiente.
     */
    return (
      <Routes>
        <Route path="/" element={<Login setAuthState={setAuthState} />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Directorio />} />
        <Route path="/" element={<Calendario />} />
        <Route path="/" element={<FormularioTablon />} />
        <Route path="/empleados" element={<ListadoEmpleados />} />
        <Route path="/empleados/nuevo" element={<AnyadirEmpleado />} />
        <Route path="/tiempo" element={<FormularioTablon />} />
      </Routes>
    );
  }
}

export default App;
