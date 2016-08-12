export const ASSIGN_NOTE_TO_LANE = 'ASSIGN_NOTE_TO_LANE'; 

export const assignNoteToLane = (noteId, laneId) => {
	return {
			type: ASSIGN_NOTE_TO_LANE,
			noteId,
			laneId
		};
};

export const ADD_LANE = 'ADD_LANE';

export const addLane = (id, name) => {
	return {
			type: ADD_LANE,
			id, 
			name
		};
};

export const UNASSIGN_NOTE_FROM_LANE = 'UNASSIGN_NOTE_FROM_LANE';

export const unassignNoteFromLane = (noteId, laneId) => {
	return {
			type: UNASSIGN_NOTE_FROM_LANE,
			noteId, 
			laneId
		};
};

export const MOVE_NOTE_IN_LANE = 'MOVE_NOTE_IN_LANE';

export const moveNoteInLane = (laneId, sourceIndex, targetIndex) => {
	return {
			type: MOVE_NOTE_IN_LANE,
			laneId,
			sourceIndex,
			targetIndex
		};
};
