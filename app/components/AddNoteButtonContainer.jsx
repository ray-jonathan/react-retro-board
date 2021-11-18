import Button from './Button';
import {v4} from 'uuid';
import React from 'react';
import socket from '../socketInstance';



const onClick = (props) => {
	const note = {id: v4(), task: '', editing: true}
	const state = JSON.parse(localStorage.getItem('state'))
	console.log('I think Im clicking on: ', props.laneId.substring(0,5))
	const laneIndex = state.lanes.findIndex(lane => lane.id == props.laneId)
	if(laneIndex > -1) {
		state.notes.forEach(note => note.editing = false)
		state.notes.push(note)
		state.lanes[laneIndex].notes.push(note.id)
		console.log('state', state)
		socket.emit('BOARD_UPDATE', {...state, socketId: socket.id})
	}
}
	

const AddNoteButtonContainer = (props) => (
	<Button onClick={() => onClick(props)} label={props.label || 'button'} className={'btn btn-default'} />
);

export default AddNoteButtonContainer;