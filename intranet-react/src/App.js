import "./App.css";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Directorio from "./directorio";
import Calendario from "./calendario";
import useAuth from "./hooks/useAuth";


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
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/" element={<Directorio />} />
      </Routes>
    );
  }
}

export default App;
