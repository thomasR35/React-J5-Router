import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminAnimalPage from "./pages/AdminAnimalPage";
import ContactPage from "./pages/ContactPage";
import AdminContactPage from "./pages/AdminContactPage";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Barre de navigation */}
        <Navbar />

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-animaux" element={<AdminAnimalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin-contacts" element={<AdminContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
