export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (id) => {
	return {
			type: ADD_NOTE,
			id
		};
};

export const ACTIVATE_NOTE_EDITING = 'ACTIVATE_NOTE_EDITING';

export const activateNoteEditing = (id) => {
	return {
			type: ACTIVATE_NOTE_EDITING,
			id
		};
};

export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (id) => {
	return {
			type: DELETE_NOTE,
			id
		};
};

export const EDIT_NOTE = 'EDIT_NOTE';

export const editNote = (id, task) => {
	return {
			type: EDIT_NOTE,
			id,
			task
		};
};
