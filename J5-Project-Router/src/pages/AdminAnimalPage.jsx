import React, { useState } from "react";
import FormAnimal from "../components/FormAnimal";
import TableauAnimaux from "../components/TableauAnimaux";
import "../styles/pages/.AdminPage.scss";

const AdminAnimalPage = () => {
  const [animaux, setAnimaux] = useState([]);

  const ajouterAnimal = (animal) => setAnimaux([...animaux, animal]);

  const supprimerAnimal = (index) =>
    setAnimaux(animaux.filter((_, i) => i !== index));

  return (
    <div className="admin-animal-page">
      <h1>Admin - Gestion des Animaux</h1>
      <FormAnimal ajouterAnimal={ajouterAnimal} />
      <TableauAnimaux animaux={animaux} supprimerAnimal={supprimerAnimal} />
    </div>
  );
};

export default AdminAnimalPage;
