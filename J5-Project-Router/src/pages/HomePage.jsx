import React from "react";
import "../styles/pages/HomePage.scss";

const HomePage = () => {
  return (
    <div className="container mt-4 home-page">
      <h1>Bienvenue dans le Carnet d'Adresses</h1>
      <p>
        Cette application vous permet de gérer facilement vos animaux et vos
        contacts. Ajoutez, modifiez, et supprimez des informations en quelques
        clics.
      </p>
      <p>
        Utilisez les onglets de navigation pour accéder aux pages
        d'administration et commencer à remplir votre carnet.
      </p>
    </div>
  );
};

export default HomePage;
