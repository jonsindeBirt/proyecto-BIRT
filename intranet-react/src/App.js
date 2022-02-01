import "./App.css";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Directorio from "./ventanaDirectorio";
import CalendarioFestivos from "./ventanaCalendarioFestivos";
import useAuth from "./hooks/useAuth";
import FormularioTablon from "./ventanaAltaAnuncios";
import ListadoEmpleados from "./rrhh/ventanaListadoEmpleados";
import AnyadirEmpleado from "./rrhh/alta-empleados";
import DetalleEmpleado from "./rrhh/detalle-empleado";
import GestionEmpleados from "./rrhh/ventanaGestionEmpleados";
import ListinTelefonico from "./ventanaListin";
import React from "react";
function App() {
  // esto es un hook personalizado. lo usamos para verificar si el usuario esta logueado o no
  const { authState, setAuthState } = useAuth();

  // comprobamos si el usuario esta logueado o no
  if (!authState) {
    return <Login setAuthState={setAuthState} />;
  } else {
    return (
      /**
       * Usamos Routes para agrupar las rutas que tendrá nuestra aplicación.
       * Cuando haya un cambio en la ruta del navegador, si coincide con alguna de las rutas, se ejecutará el componente correspondiente.
       */
      <>
        <Routes>
          <Route
            path="/calendario"
            element={<CalendarioFestivos setAuthState={setAuthState} />}
          />
          <Route path="/forlumarioTablon" element={<FormularioTablon />} />
          <Route
            path="/gestion"
            element={<GestionEmpleados setAuthState={setAuthState} />}
          />
          <Route
            path="/gestion/empleados"
            element={<ListadoEmpleados setAuthState={setAuthState} />}
          />
          <Route
            path="/gestion/empleados/:id"
            element={<DetalleEmpleado setAuthState={setAuthState} />}
          />
          <Route
            path="/gestion/empleados/nuevo"
            element={<AnyadirEmpleado setAuthState={setAuthState} />}
          />
          <Route path="/tiempo" element={<FormularioTablon />} />
          <Route
            path="/listin"
            element={<ListinTelefonico setAuthState={setAuthState} />}
          />
          <Route
            path="/"
            element={<Directorio setAuthState={setAuthState} />}
          />
        </Routes>
      </>
    );
  }
}

export default App;
