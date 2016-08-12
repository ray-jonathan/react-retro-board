import { connect } from 'react-redux';
import Button from './Button';
import { addLane } from '../actions/lanes';
import { addLaneToBoard } from '../actions/boards';
import uuid from 'uuid';

const mapStatehToButtonProps = (state, ownProps) => ({
	label: ownProps.label || 'Click me...'
});

const mapDispatchToButtonProps = (dispatch, ownProps) => ({
	onClick: () => {
		const laneId = uuid.v4();

		dispatch(addLane(laneId));

		dispatch(addLaneToBoard(laneId, ownProps.boardId));

		return laneId;
	}
});

const AddLaneButtonContainer = connect(
	mapStatehToButtonProps,
	mapDispatchToButtonProps
)(Button);

export default AddLaneButtonContainer;
