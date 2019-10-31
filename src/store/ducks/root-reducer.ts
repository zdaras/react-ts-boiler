import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-starter-kit';

import app from './app';
import toast from './toast';

const rootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		app: app.reducer,
		toast: toast.reducer
	});

export type IRootStore = ReturnType<ReturnType<typeof rootReducer>>;

export default rootReducer;
