import { connect } from 'react-redux';
import Board from './Board';
import find from 'lodash/find'

const mapStateToBoardProps = (state, ownProps) => {
	const board = state.boards.find((board) => board.id === ownProps.boardId);
	let lanes = [];
	let boardId = '';
	let title = '';

	if (board) {
		boardId = board.id;
		title = board.title;
		lanes = board.lanes.map( (laneId) => {
			return find(state.lanes, (lane) => lane.id === laneId);
		});
	}

	return {
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
