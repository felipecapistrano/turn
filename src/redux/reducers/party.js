const initialState = {
  characters: [],
};

const party = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTERS": {
      const characters = action.payload;

      return { ...state, characters };
    }

    default:
      return state;
  }
};

export default party;
