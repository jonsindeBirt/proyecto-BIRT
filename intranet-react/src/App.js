import "./App.css";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Directorio from "./ventanaDirectorio";
import CalendarioFestivos from "./ventanaCalendarioFestivos";
import useAuth from "./hooks/useAuth";
import FormularioTablon from "./ventanaAltaAnuncios";
import ListadoEmpleados from "./rrhh/ventanaListadoEmpleados";
import AnyadirEmpleado from "./rrhh/alta-empleados";
import GestionEmpleados from "./rrhh/ventanaGestionEmpleados";
import ListinTelefonico from "./ventanaListin";
import React from "react";
import DesplegableRRHH from "./components/desplegableRecursos";

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
        <Route path="/login" element={<Login />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/calendario" element={<CalendarioFestivos />} />
        <Route path="/forlumarioTablon" element={<FormularioTablon />} />
        <Route path="/gestion/empleados" element={<ListadoEmpleados />} />
        <Route path="/tiempo" element={<FormularioTablon />} />
        <Route path="/gestion" element={<GestionEmpleados />} />
        <Route path="/listin" element={<ListinTelefonico />} />
        <Route path="/altaEmpleados" element={<AnyadirEmpleado />} />

      </Routes>
    );
  }
}

export default App;
