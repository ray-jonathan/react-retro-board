import expect from 'expect';
import uuid from 'uuid';
import notesReducer from '../../app/reducers/notes';
import * as types from '../../app/constants/actionTypes';

describe('Notes reducer', () => {

	function stateBefore() {
		return [
			{
				id: 1,
				task: 'note 1'
			},
			{
				id: 2,
				task: 'note 2'
			}
		]
	};

	describe('Unknown action', () => {

		it('should return the same state', ()=> {
			const expectedState = stateBefore();

			const action = {
				type: 'UNKNOWN_ACTION'
			};

			const actualState = notesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.ADD_NOTE}`, () => {

		it('should append a note to the state', ()=> {
			const newNoteId = uuid.v4();

			const expectedState = [
				{
					id: 1,
					task: 'note 1'
				},
				{
					id: 2,
					task: 'note 2'
				},
				{
					id: newNoteId,
					task: ''
				}
			];

			const action = {
				type: types.ADD_NOTE,
				id: newNoteId
			};

			const actualState = notesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.DELETE_NOTE}`, () => {

		it('should delete a note by ID from the state', ()=> {

			const expectedState = [
				{
					id: 1,
					task: 'note 1'
				}
			];

			const action = {
				type: types.DELETE_NOTE,
				id: 2
			};

			const actualState = notesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.ACTIVATE_NOTE_EDITING}`, () => {

		it('should set the editing property of a note to true', ()=> {

			const expectedState = [
				{
					id: 1,
					task: 'note 1',
					editing: true
				},
				{
					id: 2,
					task: 'note 2',
					editing: false
				}
			];

			const action = {
				type: types.ACTIVATE_NOTE_EDITING,
				id: 1
			};

			const actualState = notesReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

});
