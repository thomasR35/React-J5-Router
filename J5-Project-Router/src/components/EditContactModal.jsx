import React, { useState } from "react";

const EditContactModal = ({ contact, index, modifierContact, onClose }) => {
  const [formData, setFormData] = useState(contact);

  const handleSave = () => {
    modifierContact(index, formData);
    onClose();
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modifier Contact</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Nom"
              value={formData.nom}
              onChange={(e) =>
                setFormData({ ...formData, nom: e.target.value })
              }
              className="form-control mb-2"
            />
            {/* Ajoutez les autres champs */}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContactModal;
