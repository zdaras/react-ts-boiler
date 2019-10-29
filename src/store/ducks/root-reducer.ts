import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-starter-kit';

import app from './app';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		app: app.reducer
	});

export type IRootStore = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
