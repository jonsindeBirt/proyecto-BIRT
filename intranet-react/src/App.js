import "./App.css";
import Login from "./login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    /**
     * Usamos Routes para agrupar las rutas que tendrá nuestra aplicación. Cuando haya un cambio en la ruta del navegador, si coincide con alguna de las rutas, se ejecutará el componente correspondiente.
     */
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
