import React, { useReducer } from "react";
import { animalReducer, initialState } from "../reducers/animalReducer";

const FormAnimal = ({ ajouterAnimal }) => {
  const [formData, dispatch] = useReducer(animalReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.famille &&
      formData.espece &&
      formData.prenom &&
      formData.age
    ) {
      ajouterAnimal({ ...formData, age: parseInt(formData.age, 10) });
      dispatch({ type: "RESET_FORM" });
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="famille"
        placeholder="Famille"
        value={formData.famille}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="text"
        name="espece"
        placeholder="Espèce"
        value={formData.espece}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        type="number"
        name="age"
        placeholder="Âge"
        value={formData.age}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">
        Ajouter Animal
      </button>
    </form>
  );
};

export default FormAnimal;
