import { GET_ALL_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./constants";
import {database} from "../../services/firebase";

const notesRef = database.ref('users').child("user1").child("notes");


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


export const addNote = (note, noteId) => {
    return dispatch => {
        notesRef.push({note, timestamp: new Date().getTime().toString()});
        dispatch(addNoteAction(note, noteId));
    }
}







