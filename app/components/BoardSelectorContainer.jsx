import { connect } from 'react-redux';
import BoardSelector from './BoardSelector';
import uuid from 'uuid';

const mapStateToBoardSelectorProps = (state, ownProps) => {
	const board = state.boards.find((board) => board.id === ownProps.boardId);
	const selectedBoard = board ? board.id : '';
	return {
		boards: state.boards,
		selectedBoard: selectedBoard
	}
};

const BoardSelectorContainer = connect(
	mapStateToBoardSelectorProps,
	null
)(BoardSelector);

export default BoardSelectorContainer;
