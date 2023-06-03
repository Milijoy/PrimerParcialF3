
import React, { useState } from "react";
import './App.css'
import Card from "./Components/Card";
import Form from "./Components/Form";

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowCard(true);
  };

  return (
    <div>
      {showCard ? (
        <Card formData={formData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
