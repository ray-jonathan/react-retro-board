import { connect } from 'react-redux';
import Board from './Board';
import find from 'lodash/find'

const mapStateToBoardProps = (state, ownProps) => {
	const board = state.boards.find((board) => board.active === true);
	let lanes = [];
	let boardId = '';
	let title = '';
	let hasActiveBoard = false;

	if (board) {
		hasActiveBoard = true;
		boardId = board.id;
		title = board.title;
		lanes = board.lanes.map( (laneId) => {
			return find(state.lanes, (lane) => lane.id === laneId);
		});
	}

	return {
		hasActiveBoard: hasActiveBoard,
		id: boardId,
		title: title,
		lanes: lanes
	}
};

const BoardContainer = connect(
	mapStateToBoardProps,
	null
)(Board);

export default BoardContainer;
