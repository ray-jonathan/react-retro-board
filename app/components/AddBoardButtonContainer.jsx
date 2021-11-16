import { connect } from 'react-redux';
import Button from './Button';
import { addBoard, addLaneToBoard } from '../actions/boards';
import { addLane } from '../actions/lanes';
import { browserHistory } from 'react-router';
import uuid from 'uuid';
import socket from '../socketInstance';

const mapStateToButtonProps = (state, ownProps) => ({
	label: ownProps.label || 'button',
	className: ownProps.className || 'btn btn-primary'
});

const mapDispatchToButtonProps = (dispatch, ownProps) => ({
	onClick: () => {
		const boardId = uuid.v4();
		let lanes = ownProps.lanes
		// lanes = ['Start', 'Stop', 'Continue'];

		dispatch(addBoard(boardId));

		lanes.forEach( (name) => {
			let laneId = uuid.v4();
			dispatch(addLane(laneId, name));
			dispatch(addLaneToBoard(laneId, boardId));
		});

		//TODO: Is pushing to the browser history the correct thing to do here?
		browserHistory.push('/board/' + boardId);
		setTimeout(()=> {
			const state = localStorage.getItem('state');
			console.log('state')
			socket.emit('RETRO_CONFIGURED', state)
		}, 1001)
		
	}
});

const AddBoardButtonContainer = connect(
	mapStateToButtonProps,
	mapDispatchToButtonProps
)(Button);

export default AddBoardButtonContainer;
