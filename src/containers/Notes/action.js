import { GET_ALL_NOTES, ADD_NOTE, EDIT_NOTE } from "./constants";

export const addNote = (note, noteId) => ({
    type: ADD_NOTE,
    payload: {
        id: noteId,
        note
    }
});

export const editNote = (note, index) => ({
    type: EDIT_NOTE,
    payload: {
        note,
        index
    }
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}




