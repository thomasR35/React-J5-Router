import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminAnimalPage from "./pages/AdminAnimalPage";
import ContactPage from "./pages/ContactPage";
import AdminContactPage from "./pages/AdminContactPage";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-animaux" element={<AdminAnimalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin-contacts" element={<AdminContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
