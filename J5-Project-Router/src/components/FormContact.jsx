import React, { useState } from "react";

const FormContact = ({ ajouterContact }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterContact(formData);
    setFormData({ nom: "", prenom: "", email: "", telephone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Nom"
        value={formData.nom}
        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
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
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="form-control mb-2"
      />
      <input
        type="tel"
        placeholder="Téléphone"
        value={formData.telephone}
        onChange={(e) =>
          setFormData({ ...formData, telephone: e.target.value })
        }
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">
        Ajouter Contact
      </button>
    </form>
  );
};

export default FormContact;
