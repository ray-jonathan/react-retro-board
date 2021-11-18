import Button from './Button';
import {v4} from 'uuid';
import React from 'react';
import socket from '../socketInstance';

const onClick = (props) => {
	const boardId = v4();
	let lanes = props.lanes

	const state = {
		boards: [],
		lanes: [],
		notes: []
	};
	state.boards[0] = {
		id: boardId,
		title: boardId,
		lanes: []
	}

	
	lanes.forEach( (name) => {
		let laneId = v4();
		state.lanes.push({id: laneId, name: name, notes: []})
		state.boards[0].lanes.push(laneId)
	});


	localStorage.setItem('state', JSON.stringify(state));
	socket.emit('BOARD_UPDATE', state)
	// setTimeout(()=> {
	// }, 1001)
	
}

const AddBoardButtonContainer = (props) => (
	<Button onClick={() => onClick(props)} label={props.label || 'button'} className={props.className || 'btn btn-primary'} />
);

export default AddBoardButtonContainer;
