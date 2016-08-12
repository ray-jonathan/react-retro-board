import update from 'react-addons-update';
import uuid from 'uuid';
import * as types from '../actions/boards';

const boards = (state = [], action) => {

	switch (action.type) {
		case types.ADD_BOARD: {
			const boardId = action.id;

			return state.concat({
				id: boardId,
				title: boardId,
				lanes: []
			});
		}
		case types.SET_ACTIVE_BOARD: {
			const boardId = action.id;

			return state.map((board) => {
				board.active = board.id === boardId;
				return board;
			});
		}
		case types.ASSIGN_LANE_TO_BOARD: {
			const boardId = action.boardId;
			const laneId = action.laneId;

			return state.map((board) => {
				if (board.id === boardId) {
					return Object.assign({}, board, {
						lanes: [...board.lanes, laneId]
					});
				}
				return board;
			});
		}
		default: {
			return state;
		}
	}

};

export default boards;
