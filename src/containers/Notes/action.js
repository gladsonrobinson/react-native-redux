import { GET_ALL_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./constants";
import {database} from "../../services/firebase"

export const addNoteAction = (note, noteId) => ({
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

const ref = database.ref('notes');


export const addNote = (note, noteId) => {
       dispatch => {
        ref.push({note, noteId});
        dispatch(addNoteAction(note, noteId));
    }
}





