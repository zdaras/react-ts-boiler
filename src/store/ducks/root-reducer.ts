import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import app from './app/reducers';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		app
	});

export type IRootStore = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
