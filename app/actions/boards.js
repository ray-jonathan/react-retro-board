import * as types from '../constants/actionTypes';

export const addBoard = (boardId) => {
	return {
			type: types.ADD_BOARD,
			id: boardId,
			name: boardId
		}
};

export const addLaneToBoard = (laneId, boardId) => {
	return {
			type: types.ASSIGN_LANE_TO_BOARD,
			laneId,
			boardId
		}
};
