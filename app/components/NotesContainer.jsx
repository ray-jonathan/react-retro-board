import Notes from './Notes';
import React from 'react';
import update from 'react-addons-update';
import socket from '../socketInstance';

export default class NotesContainer extends React.Component {
	constructor(props){
		super(props)
	}
	onDelete = (id) => {
		const state = JSON.parse(localStorage.getItem('state'))
		state.lanes.forEach((lane, i) => {
			const index = lane.notes.findIndex(noteId => noteId == id)
			if(index > -1){
				state.lanes[i].notes = [		
					...state.lanes[i].notes.slice(0, index),
					...state.lanes[i].notes.slice(index + 1, state.lanes[i].notes.length)
				]
				console.log(state.lanes[i].notes)
			}
		})
		const noteIndex = state.notes.findIndex(note=> note.id == id)
		if(noteIndex > -1){
			state.notes = [		
				...state.notes.slice(0, noteIndex),
				...state.notes.slice(noteIndex + 1, state.notes.length)
			]
		}
		socket.emit('BOARD_UPDATE', {...state, socketId: socket.id})
	}
	onNoteClick = (id) => {
		const state = JSON.parse(localStorage.getItem('state'))
		const editNote = state.notes.find(note => note.id == id)
		console.log('onNoteClick',id, editNote)
		editNote.editing = true
		socket.emit('BOARD_UPDATE', {...state, socketId: socket.id})

	}
	onFinishEdit = (id, task) => {
		const state = JSON.parse(localStorage.getItem('state'))
		const editNote = state.notes.find(note => note.id == id)
		editNote.editing = false
		editNote.task = task
		console.log('onFinishEdit',id, editNote)
		socket.emit('BOARD_UPDATE', {...state, socketId: socket.id})
	}
	onNoteMove = (laneId, sourceIndex, targetIndex) => {
		const state = JSON.parse(localStorage.getItem('state'))
		console.log('\n\n\n\nstate.lanes',state.lanes)
		state.lanes = state.lanes.map((lane) => {
			if (lane.id === laneId) {
				// get note being moved
				const note = lane.notes[sourceIndex];
				return Object.assign({}, lane, {
					// use react add ons update and $splice
					notes: update(lane.notes, {
						$splice: [
							[sourceIndex, 1],
							[targetIndex, 0, note]
						]
					})

				});
			}
			return lane;
		});
		socket.emit('BOARD_UPDATE', {...state, socketId: socket.id})
	}

	render(){
		const {lane, notes} = this.props
		if(notes.length)console.log('new NotesContainer render', notes)
		// let notes = ownProps.notes.map( id => state.notes.find( (note) => note.id === id ) );
		return (
			<Notes 
				onDelete={(id) => this.onDelete(id)}
				onNoteClick={(id) => this.onNoteClick(id)}
				onFinishEdit={(id, task) => this.onFinishEdit(id, task)}
				onNoteMove={(sourceIndex, targetIndex) => this.onNoteMove(lane.id, sourceIndex, targetIndex)}
				notes={notes}
			/>
		)
	}
}