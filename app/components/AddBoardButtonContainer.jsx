import Button from './Button';
import {v4} from 'uuid';
import React from 'react';
import { addBoard, addLaneToBoard } from '../actions/boards';
import { addLane } from '../actions/lanes';
import { browserHistory } from 'react-router';
import socket from '../socketInstance';
import { v4 as uuidv4 } from 'uuid';

const lanesFromCat = {
	'MadSadGlad': ['Mad', 'Sad', 'Glad'],
	'Wellness': ['What Went Well', 'What Did Not Go Well'],
	'StopStartCon': ['Stop', 'Start', 'Continue'],
	'4Ls': ['Liked', 'Learned', 'Lacked', 'Longed For'],
	'WRAP': ['Wishes', 'Risks', 'Appreciations', 'Puzzles'],
	'custom': ['Live', 'Laugh', 'Love']
};

const onClick = (props) => {
	const boardId = v4();
	let lanes = lanesFromCat[props.categories];

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
