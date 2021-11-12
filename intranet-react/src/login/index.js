import { useState } from "react";
import logo from "../assets/logocasino.png";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(evt) {
    /*
        Previene el comportamiento default de los
        formularios el cual recarga el sitio
      */
    evt.preventDefault();
    // Aquïż½ puedes usar values para enviar la informaciïż½n
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
           input que ejecutïż½ el evento
      */
    const newValues = {
      ...values,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="loginvacioizda">
        <img className="esquinasuperior" src={logo} alt="logotipo"></img>
        <br />

        <p className="bienvenidos">Bienvenid@s</p>
        <br />
      </div>

      <div className="logincolum">
        <button type="submit" className="triangulo"></button>
        <br />
        <br />
        <br />
        <br />

        <label className="tipohelveticafina" htmlFor="email">
          Usuario
        </label>
        <br />

        <input
          className="recuadrostextos"
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <label className="tipohelveticafina" htmlFor="password">
          Contraseña
        </label>
        <br />

        <input
          className="recuadrostextos"
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        <br />
        <br />
        {/* <button type="submit">Entrar</button> */}
      </div>
    </form>
  );
}

export default Login;