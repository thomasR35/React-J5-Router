import React, { useState } from "react";
import "../styles/pages/.AdminPage.scss";

const ContactPage = ({ ajouterContact }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.nom &&
      formData.prenom &&
      formData.email &&
      formData.telephone
    ) {
      ajouterContact(formData);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        dateNaissance: "",
      });
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };

  return (
    <div className="container mt-4 admin-page">
      <h1>Ajouter un Contact</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateNaissance" className="form-label">
            Date de Naissance (Optionnel)
          </label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter Contact
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
