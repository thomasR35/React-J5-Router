const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "DELETE_CONTACT":
      return state.filter((_, index) => index !== action.payload);
    case "EDIT_CONTACT":
      return state.map((contact, index) =>
        index === action.payload.index ? action.payload.updatedContact : contact
      );
    default:
      return state;
  }
};

export default contactReducer;
