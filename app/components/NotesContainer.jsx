import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNote, editNote, activateNoteEditing } from '../actions/notes';
import { unassignNoteFromLane, moveNoteInLane } from '../actions/lanes';
import debounce from 'lodash/debounce'; 

const mapStateToNotesProps = (state, ownProps) => {
	// ownProps.notes is the array of note ids
	// so we need to find these and grab them from state.notes
	let notes = ownProps.notes.map( id => state.notes.find( (note) => note.id === id ) );
	return {
		notes: notes
	};
};

const mapDispatchToNotesProps = (dispatch, ownProps) => ({
	onDelete: (id) => {
		dispatch(deleteNote(id));
		dispatch(unassignNoteFromLane(id, ownProps.laneId));
	},
	onNoteClick: (id) => {
		dispatch(activateNoteEditing(id));
	},
	onFinishEdit: (id, task) => {
		dispatch(editNote(id, task));
	},
	onNoteMove: (sourceIndex, targetIndex) => {
		dispatch(moveNoteInLane(ownProps.laneId, sourceIndex, targetIndex));
	}
});

const NotesContainer = connect(
	mapStateToNotesProps,
	mapDispatchToNotesProps
)(Notes);

export default NotesContainer;
