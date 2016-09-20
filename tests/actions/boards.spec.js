import expect from 'expect';
import uuid from 'uuid';
import { addBoard, addLane, addLaneToBoard, setActiveBoard } from '../../app/actions/boards';
import * as types from '../../app/constants/actionTypes';

describe('Lanes actions', () => {

	describe(`${types.ADD_BOARD}`, () => {

		it('creates an action to add a board', ()=> {
			const id = uuid.v4();
			const expected = {
				type: types.ADD_BOARD,
				id,
				name: id
			};

			expect(addBoard(id)).toEqual(expected);
		});

	});

	describe(`${types.ASSIGN_LANE_TO_BOARD}`, () => {

		it('creates an action to assign a lane to a board', ()=> {
			const laneId = uuid.v4();
			const boardId = uuid.v4();
			const expected = {
				type: types.ASSIGN_LANE_TO_BOARD,
				laneId,
				boardId
			};

			expect(addLaneToBoard(laneId, boardId)).toEqual(expected);
		});

	});

});
