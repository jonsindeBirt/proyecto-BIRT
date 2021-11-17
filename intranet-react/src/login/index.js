import { useState } from "react";
import logo from "../assets/logocasino.png";
import { useMutation, useQueryClient } from "react-query";
import { login } from "./services";
import { Row } from "react-bootstrap";

function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation(login, {
    onSuccess: ({ data }) => {
      console.log(data);
      setLoginError(false);
      setLoginErrorMessage("");
    },
    onError: ({ error }) => {
      console.log(error);
      setLoginError(true);
      setLoginErrorMessage(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  function handleSubmit(evt) {
    /*
        Previene el comportamiento default de los
        formularios el cual recarga el sitio
      */
    evt.preventDefault();
    // Aquïż½ puedes usar values para enviar la informaciïż½n
    mutate(loginState);
  }
  function handleChange(evt) {
    /*
        evt.target es el elemento que ejecuto el evento
        name identifica el input y value describe el valor actual
      */
    const { target } = evt;
    const { name, value } = target;
    /*
        Este snippet:
        1. Clona el estado actual
        2. Reemplaza solo el valor del
           input que ejecutÃ¯Å¼Â½ el evento
      */
    const newLoginState = {
      ...loginState,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setLoginState(newLoginState);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="columnaizquierda">
          <img className="logotiposuperior" src={logo} alt="logotipo"></img>
          <p className="recuadromarronlogin">Login</p>
          <br />

          <p className="bienvenidos">Bienvenid@s</p>
          <br />
        </div>

        <div className="columnaderecha">
          <button type="submit" className="triangulo"></button>
          <br />
          <br />
          <br />
          <br />

          <label className="tituloscasillas" htmlFor="email">
            Usuario
          </label>
          <br />

          <input
            className="recuadrostextos"
            id="email"
            name="email"
            type="email"
            value={loginState.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <label className="tituloscasillas" htmlFor="password">
            Contraseña
          </label>
          <br />

          <input
            className="recuadrostextos"
            id="password"
            name="password"
            type="password"
            value={loginState.password}
            onChange={handleChange}
          />

          <br />
          <br />
          {/* <button type="submit">Entrar</button> */}
        </div>
      </form>
      {loginError ? (
        <div className="error">
          <p>{loginErrorMessage}</p>
        </div>
      ) : null}
    </>
  );
}

export default Login;
