import React from 'react';
import NotesContainer from './NotesContainer';
import AddNoteButtonContainer from './AddNoteButtonContainer';

import { compose } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Lane = ({lane}) => (
	<div className="col-md-4 lane">
		<div className="lane-header">
			<h2>{lane.name}</h2>
		</div>
		<NotesContainer notes={lane.notes} laneId={lane.id} />
		<div className="lane-footer">
			<AddNoteButtonContainer laneId={lane.id} label="Add a card..." />
		</div>
	</div>
);

export default compose(
	DragDropContext(HTML5Backend)
)(Lane);
