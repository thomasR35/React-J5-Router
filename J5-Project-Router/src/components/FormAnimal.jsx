import React, { useState } from "react";

const FormAnimal = ({ ajouterAnimal }) => {
  const [formData, setFormData] = useState({
    famille: "",
    espece: "",
    prenom: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.famille &&
      formData.espece &&
      formData.prenom &&
      formData.age
    ) {
      ajouterAnimal({ ...formData, age: parseInt(formData.age, 10) });
      setFormData({ famille: "", espece: "", prenom: "", age: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Famille"
        value={formData.famille}
        onChange={(e) => setFormData({ ...formData, famille: e.target.value })}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Espèce"
        value={formData.espece}
        onChange={(e) => setFormData({ ...formData, espece: e.target.value })}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Âge"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">
        Ajouter Animal
      </button>
    </form>
  );
};

export default FormAnimal;
