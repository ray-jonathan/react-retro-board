import { connect } from 'react-redux';
import BoardSelector from './BoardSelector';
import { setActiveBoard } from '../actions/boards';
import uuid from 'uuid';

const mapStateToBoardSelectorProps = (state, ownProps) => {
	const board = state.boards.find((board) => board.active === true);
	const selectedBoard = board ? board.id : '';
	return {
		boards: state.boards,
		selectedBoard: selectedBoard
	}
};

const mapDispatchToBoardSelectorProps = (dispatch, ownProps) => ({
		onChange: (boardId) => {
			dispatch(setActiveBoard(boardId));
		}
});

const BoardSelectorContainer = connect(
	mapStateToBoardSelectorProps,
	mapDispatchToBoardSelectorProps
)(BoardSelector);

export default BoardSelectorContainer;
