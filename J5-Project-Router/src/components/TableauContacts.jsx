const TableauContacts = ({ contacts, supprimerContact, setEditIndex }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>{contact.nom}</td>
            <td>{contact.prenom}</td>
            <td>{contact.email}</td>
            <td>{contact.telephone}</td>
            <td>
              <button
                onClick={() => setEditIndex(index)}
                className="btn btn-warning btn-sm"
              >
                Modifier
              </button>
              <button
                onClick={() => supprimerContact(index)}
                className="btn btn-danger btn-sm"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauContacts;
