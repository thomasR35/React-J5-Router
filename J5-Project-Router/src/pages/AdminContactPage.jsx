import React, { useReducer, useState } from "react";
import FormContact from "../components/FormContact";
import TableauContacts from "../components/TableauContacts";
import EditContactModal from "../components/EditContactModal";
import {
  getContactsFromStorage,
  saveContactsToStorage,
} from "../utils/localStorage";
import "../styles/pages/.AdminPage.scss";

// Importation du reducer
import contactReducer from "./contactReducer";

const AdminContactPage = () => {
  const [contacts, dispatch] = useReducer(
    contactReducer,
    [],
    getContactsFromStorage
  );
  const [editIndex, setEditIndex] = useState(null);

  // Sauvegarde des contacts dans le localStorage
  React.useEffect(() => {
    saveContactsToStorage(contacts);
  }, [contacts]);

  // Ajoute un nouveau contact
  const ajouterContact = (nouveauContact) => {
    dispatch({ type: "ADD_CONTACT", payload: nouveauContact });
  };

  // Supprime un contact
  const supprimerContact = (index) => {
    dispatch({ type: "DELETE_CONTACT", payload: index });
  };

  // Modifie un contact existant
  const modifierContact = (index, updatedContact) => {
    dispatch({ type: "EDIT_CONTACT", payload: { index, updatedContact } });
  };

  return (
    <div className="container mt-4 admin-contact-page">
      <h1>Admin - Gestion des Contacts</h1>
      <FormContact ajouterContact={ajouterContact} />
      <TableauContacts
        contacts={contacts}
        supprimerContact={supprimerContact}
        setEditIndex={setEditIndex}
      />
      {editIndex !== null && (
        <EditContactModal
          contact={contacts[editIndex]}
          index={editIndex}
          modifierContact={modifierContact}
          onClose={() => setEditIndex(null)}
        />
      )}
    </div>
  );
};

export default AdminContactPage;
