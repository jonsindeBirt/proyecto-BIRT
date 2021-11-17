import { useState } from "react";

/**
 *
 * hook
 * se utiliza para crear una funcion que se ejecuta en cada renderizado
 * esta función tiene una variable de estado que se actualiza en cada renderizado
 * además tiene dos funciones: getAuth() y setAuth()
 * getAuth() retorna el valor que tenemos almacenado en el localStorage
 * seetAuth() actualiza el valor del localStorage y del estado
 */
export default function useAuth() {
  const [authState, setAuthState] = useState(getAuth());

  function getAuth() {
    const auth = localStorage.getItem("auth");
    return auth ? auth : null;
  }

  const setAuth = (auth) => {
    localStorage.setItem("auth", auth);
    setAuthState(auth);
  };

  return { authState, setAuthState: setAuth };
}
