export const ADD_BOARD = 'ADD_BOARD';

export const addBoard = (boardId) => {
	return {
			type: ADD_BOARD,
			id: boardId,
			name: boardId
		}
};

export const ASSIGN_LANE_TO_BOARD = 'ASSIGN_LANE_TO_BOARD';

export const addLaneToBoard = (laneId, boardId) => {
	return {
			type: ASSIGN_LANE_TO_BOARD,
			laneId,
			boardId
		}
};

export const SET_ACTIVE_BOARD = 'SET_ACTIVE_BOARD';

export const setActiveBoard = (id) => {
	return {
		type: SET_ACTIVE_BOARD,
		id
	};
};
