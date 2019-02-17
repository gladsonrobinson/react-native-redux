import { SET_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./constants";
import {database} from "../../services/firebase";

let notesRef;


const _setReference = userid => {
    notesRef = database.ref('users').child(userid).child("notes");
}

export const addNoteAction = (note) => ({
    type: ADD_NOTE,
    payload: note
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
        let ref = notesRef.push({note});
        console.log("newKeynewKeynewKeygladson", ref.key)
        let newnote = {
            note,
            timestamppppppp: new Date().getTime().toString(),
            id: ref.key
        };
        notesRef.set(newnote);
        dispatch(addNoteAction(newnote));
    }
}

let notes = [];
export const fetchNoteFromUserId = (userId) => {
    _setReference(userId);
    
    return dispatch => {
        return notesRef.once('value', noteSnapshot => {
            let ArrayOfNotes = Object.values(noteSnapshot.val())
            console.log("helloooooooo", ArrayOfNotes)
            dispatch(setNotesAction(notes));
        });
    }
}
