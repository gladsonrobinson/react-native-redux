import { GET_ALL_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./constants";
import {database} from "../../services/firebase"

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


export const deleteNote = (index) => ({
    type: DELETE_NOTE,
    payload: {
        index
    }
});

export function watchNoteAddEvent(dispatch) {
    database.ref(`/`).on('child_added', (snap) => {
        dispatch(addTask(snap.val()));
    });
} 

export function watchNoteDeleteEvent(dispatch) {
    database.ref(`/`).on('child_removed', (snap) => {
        dispatch(removeTask(snap.val()));
    });
}


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}




