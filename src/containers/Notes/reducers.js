import { GET_ALL_NOTES, ADD_NOTE } from "./constants";

let initialState = [];

export default NoteReducer = (state = initialState, action) => {
    console.log("State", state)
    switch (action.type) {
      case ADD_NOTE:
        return  [...state, action.payload];
      default:
        return state;
    }
};