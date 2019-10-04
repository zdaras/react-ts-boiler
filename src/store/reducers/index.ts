import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import counter, { ICounterState } from './counter';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		counter
	});

export interface RootStore {
	router: RouterState;
	counter: ICounterState;
}

export default rootReducer;
