import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingLabel, Form } from "react-bootstrap";


function FormularioTablon (){
 

return (
    <>
    <FloatingLabel controlId="floatingTextarea" label="Anuncios" className="w-100">
      <Form.Control as="textarea" placeholder="Escribe tu anuncio aquí" />
    </FloatingLabel>
    <FloatingLabel controlId="floatingTextarea2" label="Anuncios">
      <Form.Control
        as="textarea"
        placeholder="Escribe tu anuncio aquí"
        style={{ height: '100px' }}
      />
    
    </FloatingLabel>
  </>
  );
}

export default FormularioTablon;