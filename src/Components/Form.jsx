
import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const handleInputChange1 = (e) => {
    setNombre(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || nombre.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
    } else if (color.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      onSubmit({ nombre, color });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2> Completa el siguiente formulario:</h2>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={handleInputChange1}
      />
      <br />
      <input
        type="text"
        placeholder="Ingresa tu color favorito"
        value={color}
        onChange={handleInputChange2}
      />
      <br />
      <br />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Form;
