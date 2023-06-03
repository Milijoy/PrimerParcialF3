
import React from "react";

const Card = ({ formData }) => {
  return (
    <div>
      <h2>Gracias por completar el formulario!</h2>
      <p> Tu nombre es: {formData.nombre}</p>
      <p> y sabemos que tu color favorito es : {formData.color}</p>
    </div>
  );
};

export default Card;
