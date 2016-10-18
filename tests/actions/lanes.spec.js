import expect from 'expect';
import uuid from 'uuid';
import { assignNoteToLane, addLane, unassignNoteFromLane, moveNoteInLane } from '../../app/actions/lanes';
import * as types from '../../app/constants/actionTypes';

describe('Lanes actions', () => {

	describe(`${types.ADD_LANE}`, () => {

		it('creates an action to add a lane', ()=> {
			const id = uuid.v4();
			const name = `New Lane ${id}`;
			const expected = {
				type: types.ADD_LANE,
				id,
				name
			};

			expect(addLane(id, name)).toEqual(expected);
		});

	});

	describe(`${types.ASSIGN_NOTE_TO_LANE}`, () => {

		it('creates an action to assign a note to a lane', ()=> {
			const noteId = uuid.v4();
			const laneId = uuid.v4();
			const expected = {
				type: types.ASSIGN_NOTE_TO_LANE,
				noteId,
				laneId
			};

			expect(assignNoteToLane(noteId, laneId)).toEqual(expected);
		});

	});

	describe(`${types.UNASSIGN_NOTE_FROM_LANE}`, () => {

		it('creates an action to unassign a note from a lane', ()=> {
			const noteId = uuid.v4();
			const laneId = uuid.v4();
			const expected = {
				type: types.UNASSIGN_NOTE_FROM_LANE,
				noteId,
				laneId
			};

			expect(unassignNoteFromLane(noteId, laneId)).toEqual(expected);
		});

	});

	describe(`${types.MOVE_NOTE_IN_LANE}`, () => {

		it('creates an action to move a note in a lane', ()=> {
			const laneId = uuid.v4();
			const sourceIndex = 0;
			const targetIndex = 2;
			const expected = {
				type: types.MOVE_NOTE_IN_LANE,
				laneId,
				sourceIndex,
				targetIndex
			};

			expect(moveNoteInLane(laneId, sourceIndex, targetIndex)).toEqual(expected);
		});

	});

});
