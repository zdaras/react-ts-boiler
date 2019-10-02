import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import counter, { CounterState } from './counter';

export interface RootStore {
	router: object;
	counter: CounterState;
}

const rootReducer = (history: History<any>) =>
	combineReducers({
		router: connectRouter(history),
		counter
	});

export default rootReducer;
