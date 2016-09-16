import expect from 'expect';
import uuid from 'uuid';
import boardsReducer from '../../app/reducers/boards';
import * as types from '../../app/constants/actionTypes';

describe('Boards reducer', () => {

	function stateBefore() {
		return [
			{
				id: 1,
				title: 'board 1',
				lanes: []
			},
			{
				id: 2,
				title: 'board 2',
				lanes: []
			}
		]
	};

	describe('Unknown action', () => {

		it('should return the same state', ()=> {
			const expectedState = stateBefore();

			const action = {
				type: 'UNKNOWN_ACTION'
			};

			const actualState = boardsReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.ADD_BOARD}`, () => {

		it('should append a board to the state', ()=> {
			const newBoardId = uuid.v4();

			const expectedState = [
				{
					id: 1,
					title: 'board 1',
					lanes: []
				},
				{
					id: 2,
					title: 'board 2',
					lanes: []
				},
				{
					id: newBoardId,
					title: newBoardId,
					lanes: []
				}
			];

			const action = {
				type: types.ADD_BOARD,
				id: newBoardId
			};

			const actualState = boardsReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.SET_ACTIVE_BOARD}`, () => {

		it('should set given board as active and all others as inactive', ()=> {

			const expectedState = [
				{
					id: 1,
					title: 'board 1',
					lanes: [],
					active: false
				},
				{
					id: 2,
					title: 'board 2',
					lanes: [],
					active: true
				}
			];

			const action = {
				type: types.SET_ACTIVE_BOARD,
				id: 2
			};

			const actualState = boardsReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

	describe(`${types.ASSIGN_LANE_TO_BOARD}`, () => {

		it('should assign lane to board', ()=> {
			const laneId = uuid.v4();

			const expectedState = [
				{
					id: 1,
					title: 'board 1',
					lanes: [laneId]
				},
				{
					id: 2,
					title: 'board 2',
					lanes: []
				}
			];

			const action = {
				type: types.ASSIGN_LANE_TO_BOARD,
				boardId: 1,
				laneId: laneId
			};

			const actualState = boardsReducer(stateBefore(), action);

			expect(actualState).toEqual(expectedState);
		});

	});

});
