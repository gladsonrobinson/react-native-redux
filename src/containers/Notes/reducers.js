import { GET_ALL_NOTES, ADD_NOTE } from "./constants";

let initialState = [];

export default NoteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NOTE:
        return {
          data: [...state.data, action.note]
        };
      default:
        return state;
    }
};