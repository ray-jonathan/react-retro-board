import * as types from '../constants/actionTypes';

export const assignNoteToLane = (noteId, laneId) => {
	return {
			type: types.ASSIGN_NOTE_TO_LANE,
			noteId,
			laneId
		};
};

export const addLane = (id, name) => {
	return {
			type: types.ADD_LANE,
			id, 
			name
		};
};

export const unassignNoteFromLane = (noteId, laneId) => {
	return {
			type: types.UNASSIGN_NOTE_FROM_LANE,
			noteId, 
			laneId
		};
};

export const moveNoteInLane = (laneId, sourceIndex, targetIndex) => {
	return {
			type: types.MOVE_NOTE_IN_LANE,
			laneId,
			sourceIndex,
			targetIndex
		};
};
