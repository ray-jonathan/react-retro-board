import * as types from '../constants/actionTypes';
import socket from '../socketInstance';

export const addNote = (id, laneId) => {
	const action = {
			type: types.ADD_NOTE,
			id,
			laneId,
			socketId : socket.id
		};
	socket.emit(action.type, action)
	return action;
};

export const addNoteHelper = (id, laneId) => {
	const action = {
		type: types.ADD_NOTE,
		id,
		laneId
	};
	return action;
}

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
