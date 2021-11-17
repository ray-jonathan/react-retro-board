import React from 'react';
import NotesContainer from './NotesContainer';
import AddNoteButtonContainer from './AddNoteButtonContainer';

import { compose } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Lane = ({lane, state}) => {
	console.log(state)
	// const notes = lane.notes.map(noteId => state.notes.find(note => note.id = noteId))
	const notes = state.notes.filter(note => lane.notes.includes(note.id))
	console.log(notes)
	return(
	<div className="col-md-4 lane">
		<div className="lane-header">
			<h2>{lane.name}</h2>
		</div>
		<NotesContainer notes={notes} lane={lane.id} />
		<div className="lane-footer">
			<AddNoteButtonContainer laneId={lane.id} label="+" />
		</div>
	</div>
)}

export default compose(
	DragDropContext(HTML5Backend)
)(Lane);
