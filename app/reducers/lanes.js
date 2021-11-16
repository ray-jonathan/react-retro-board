import update from 'react-addons-update';
import uuid from 'uuid';
import * as types from '../constants/actionTypes';

const initialState = [];

const lanes = (state = initialState, action) => {

	switch (action.type) {
		case types.ADD_LANE: {
			return state.concat({
				id: action.id,
				name: action.name,
				notes: []
			});
		}
		case types.ASSIGN_NOTE_TO_LANE: {
			const laneId = action.laneId;
			const noteId = action.noteId;

			return state.map((lane) => {
				if (lane.id === laneId) {
					return Object.assign({}, lane, {
						notes: [...lane.notes, noteId]
					});
				}
				return lane;
			});
		}
		case types.UNASSIGN_NOTE_FROM_LANE: {
			
			const laneId = action.laneId;
			const noteId = action.noteId;

			return state.map((lane) => {
				if (lane.id === laneId) {

					return Object.assign({}, lane, {
						notes: lane.notes.filter( id => {
							return id !== noteId}
							)
					})
				}
				return lane;
			});
		}
		case types.MOVE_NOTE_IN_LANE: {

			const laneId = action.laneId;
			const sourceIndex = action.sourceIndex;
			const targetIndex = action.targetIndex;

			return state.map((lane) => {
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

			
		}
		default: {
			return state;
		}
	}

};

export default lanes;
