import { useState } from "react";

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
