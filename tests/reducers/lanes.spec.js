import expect from 'expect';
import uuid from 'uuid';
import lanesReducer from '../../app/reducers/lanes';
import * as types from '../../app/constants/actionTypes';

describe('Lanes reducer', () => {

	function stateBefore() {
		return [
			{
				id:  1,
				name: 'Lane 1',
				notes: ['note-1', 'note-2']
			},
			{
				id:  2,
				name: 'Lane 2',
				notes: []
			}
		];
	};

	describe('Unknown action', () => {

		it('should return the same state', ()=> {
			const expectedState = stateBefore();

			const action = {
				type: 'UNKNOWN_ACTION'
			};

			const actualState = lanesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.ADD_LANE}`, () => {

		it('should append a lane to the state', ()=> {
			const laneId = uuid.v4();
			const laneName = `Lane ${laneId}`;

			const expectedState = [
				{
					id:  1,
					name: 'Lane 1',
					notes: ['note-1', 'note-2']
				},
				{
					id:  2,
					name: 'Lane 2',
					notes: []
				},
				{
					id: laneId,
					name: laneName,
					notes: []
				}
			];

			const action = {
				type: types.ADD_LANE,
				id: laneId,
				name: laneName
			};

			const actualState = lanesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.ASSIGN_NOTE_TO_LANE}`, () => {

		it('should append the given note to the lane', ()=> {
			const noteId = uuid.v4();

			const expectedState = [
				{
					id:  1,
					name: 'Lane 1',
					notes: ['note-1', 'note-2', noteId]
				},
				{
					id:  2,
					name: 'Lane 2',
					notes: []
				}
			];

			const action = {
				type: types.ASSIGN_NOTE_TO_LANE,
				laneId: 1,
				noteId: noteId
			};

			const actualState = lanesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.UNASSIGN_NOTE_FROM_LANE}`, () => {

		it('should remove the given note from the lane', ()=> {

			const expectedState = [
				{
					id:  1,
					name: 'Lane 1',
					notes: ['note-2']
				},
				{
					id:  2,
					name: 'Lane 2',
					notes: []
				}
			];

			const action = {
				type: types.UNASSIGN_NOTE_FROM_LANE,
				laneId: 1,
				noteId: 'note-1'
			};

			const actualState = lanesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.MOVE_NOTE_IN_LANE}`, () => {

		it('should reposition a note in the note array', ()=> {

			const expectedState = [
				{
					id:  1,
					name: 'Lane 1',
					notes: ['note-2', 'note-1']
				},
				{
					id:  2,
					name: 'Lane 2',
					notes: []
				}
			];

			const action = {
				type: types.MOVE_NOTE_IN_LANE,
				laneId: 1,
				sourceIndex: 1,
				targetIndex: 0
			};

			const actualState = lanesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});
});
