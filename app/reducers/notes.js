import * as types from '../actions/notes';
/* notes reducer: respsonible for state.notes
   so state argument here is actually the state.notes array 
*/
const notes = (state = [], action) => {

	switch (action.type) {
		case types.ADD_NOTE: {

			return state.concat({
				id: action.id,
				task: ''
			});
		}
		case types.DELETE_NOTE: {

			let index = state.findIndex( note => {
				return note.id === action.id; 
			});

			return [
				...state.slice(0, index), // es6: xpand resulting with spread operator
				...state.slice(index + 1, state.length)
			];
		}
		case types.ACTIVATE_NOTE_EDITING: {

			return state.map( (note) => {
				note.editing = note.id === action.id;
				return note;
			});
		}
		case types.EDIT_NOTE: {

			return state.map( (note) => {
				if (note.id === action.id) {
					note.task = action.task;
					note.editing = false;
				}
				return note;
			});
		}
		default: {
			return state;
		}
	}
};

export default notes;
