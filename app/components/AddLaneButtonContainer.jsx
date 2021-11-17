import { connect } from 'react-redux';
import Button from './Button';
import { addLane } from '../actions/lanes';
import { addLaneToBoard } from '../actions/boards';
import { v4 as uuidv4 } from 'uuid';

const mapStatehToButtonProps = (state, ownProps) => ({
	label: ownProps.label || 'Click me...',
	className: 'btn btn-default'
});

const mapDispatchToButtonProps = (dispatch, ownProps) => ({
	onClick: () => {
		const laneId = uuidv4();

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
