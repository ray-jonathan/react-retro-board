import { connect } from 'react-redux';
import uuid from 'node-uuid';

import Button from './Button';
import { addNote, activateNoteEditing } from '../actions/notes';
import { assignNoteToLane } from '../actions/lanes';

const mapStatehToButtonProps = (state, ownProps) => ({
	label: ownProps.label || 'button'
});

const mapDispatchToButtonProps = (dispatch, ownProps) => ({
	onClick: () => {
		// in a real app the id would be generated server side
		const noteId = uuid.v4();

		dispatch(addNote(noteId));

		dispatch(assignNoteToLane(noteId, ownProps.laneId));

		dispatch(activateNoteEditing(noteId));

		return noteId;
	}
});

const AddNoteButtonContainer = connect(
	mapStatehToButtonProps,
	mapDispatchToButtonProps
)(Button);

export default AddNoteButtonContainer;
