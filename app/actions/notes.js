import * as types from '../constants/actionTypes';

export const addNote = (id) => {
	return {
			type: types.ADD_NOTE,
			id
		};
};

export const activateNoteEditing = (id) => {
	return {
			type: types.ACTIVATE_NOTE_EDITING,
			id
		};
};


export const deleteNote = (id) => {
	return {
			type: types.DELETE_NOTE,
			id
		};
};


export const editNote = (id, task) => {
	return {
			type: types.EDIT_NOTE,
			id,
			task
		};
};
