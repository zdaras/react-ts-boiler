import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import counter, { ICounterState } from './counter';
import app, { IAppState } from './app';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		counter,
		app
	});

export interface IRootStore {
	router: RouterState;
	counter: ICounterState;
	app: IAppState;
}

export default rootReducer;
