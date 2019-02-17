import { SET_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./constants";
import {database} from "../../services/firebase";

let notesRef;


const _setReference = userid => {
    notesRef = database.ref('users').child(userid).child("notes");
}

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

const setNotesAction = (notes) => ({
    type: SET_NOTE,
    payload: {
        notes
    }
});


export const addNote = (note, noteId) => {
    return dispatch => {
        notesRef.push({note, timestamp: new Date().getTime().toString()});
        dispatch(addNoteAction(note, noteId));
    }
}

export const fetchNoteFromUserId = (userId) => {
    _setReference(userId);
    
    return dispatch => {
        return notesRef.once('value', noteSnapshot => {
            console.log("helloooooooo", noteSnapshot.val())
            dispatch(setNotesAction(noteSnapshot.val()));
        });
    }
}
