import { GET_ALL_NOTES, ADD_NOTE } from "./constants";

let noteId = 0;

export const addNote = note => ({
    type: ADD_NOTE,
    id: noteId++,
    note
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }




