import expect from 'expect';
import uuid from 'uuid';
import { addNote, activateNoteEditing, deleteNote, editNote } from '../../app/actions/notes';
import * as types from '../../app/constants/actionTypes';

describe('Notes actions', () => {

	describe(`${types.ADD_NOTE}`, () => {

		it('creates an action to add a note', ()=> {
			const id = uuid.v4();
			const expected = {
				type: types.ADD_NOTE,
				id
			};

			expect(addNote(id)).toEqual(expected);
		});

	});

	describe(`${types.DELETE_NOTE}`, () => {

		it('creates an action to delete a note', ()=> {
			const id = uuid.v4();
			const expected = {
				type: types.DELETE_NOTE,
				id
			};

			expect(deleteNote(id)).toEqual(expected);
		});

	});

	describe(`${types.ACTIVATE_NOTE_EDITING}`, () => {

		it('creates an action to activiate note editing', ()=> {
			const id = uuid.v4();
			const expected = {
				type: types.ACTIVATE_NOTE_EDITING,
				id
			};

			expect(activateNoteEditing(id)).toEqual(expected);
		});

	});

	describe(`${types.EDIT_NOTE}`, () => {

		it('creates an action to edit a note', ()=> {
			const id = uuid.v4();
			const task = 'Test ' + uuid.v4();
			const expected = {
				type: types.EDIT_NOTE,
				id,
				task
			};

			expect(editNote(id, task)).toEqual(expected);
		});

	});

});
