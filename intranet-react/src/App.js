import { useState } from "react";
import "./App.css";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Directorio from "./directorio";

function App() {
  const [authState, setAuthState] = useState(false);
  /**
   * Usamos Routes para agrupar las rutas que tendrá nuestra aplicación. Cuando haya un cambio en la ruta del navegador, si coincide con alguna de las rutas, se ejecutará el componente correspondiente.
   */

  if (!authState) {
    return (
      <Routes>
        <Route path="/" element={<Login setAuthState={setAuthState} />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Directorio />} />
      </Routes>
    );
  }
}

export default App;
