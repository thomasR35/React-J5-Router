const TableauAnimaux = ({ animaux, supprimerAnimal }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Famille</th>
          <th>Espèce</th>
          <th>Prénom</th>
          <th>Âge</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {animaux.map((animal, index) => (
          <tr key={index}>
            <td>{animal.famille}</td>
            <td>{animal.espece}</td>
            <td>{animal.prenom}</td>
            <td>{animal.age}</td>
            <td>
              <button
                onClick={() => supprimerAnimal(index)}
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

export default TableauAnimaux;
