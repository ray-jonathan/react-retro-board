import throttle from 'lodash/throttle'; 
import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import boards from '../reducers/boards';
import notes from '../reducers/notes';
import lanes from '../reducers/lanes';
import { loadState, saveState } from '../localStorage.js'

const configureStore = () => {

	const initialState = loadState();

	// Redux combineReducers...does what it says on the tin
	const reducer = combineReducers({
		boards,
		lanes,
		notes // es6: Shorthand property name
	});

	const logger = createLogger();
	// Redux createStore...does what it says on the tin
	const store = createStore(reducer, initialState, applyMiddleware(logger));

	store.subscribe(throttle( ()=> {
		saveState(store.getState());
	}, 1000));

	return store;
}

export default configureStore;

// boards = {
// 	name="sprint one",
// 	lanes=[]
// }
// lanes
// notes
// sprints = [
// 	{id: , name="sprint name"}
// ]
