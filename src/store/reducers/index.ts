import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import counter from './counter';
import app from './app';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		counter,
		app
	});

export type IRootStore = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
