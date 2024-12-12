const initialState = {
  famille: "",
  espece: "",
  prenom: "",
  age: "",
};

const animalReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export { initialState, animalReducer };
