import { GET_ALL_NOTES, ADD_NOTE, EDIT_NOTE } from "./constants";

let initialState = [];

export default NoteReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case ADD_NOTE:
        if(!action.payload.note) return state;
        return  [...state, action.payload];
        case EDIT_NOTE:
          state[action.payload.index].note = action.payload.note;
          return [...state];
      default:
        return state;
    }
};
