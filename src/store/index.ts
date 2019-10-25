import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History, createBrowserHistory } from 'history';
import { Store, Middleware, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import rootReducer, { IRootStore } from './ducks/root-reducer';

export const history: History = createBrowserHistory();
const historyMiddleware: Middleware = routerMiddleware(history);
const thunkMiddleware: ThunkMiddleware = thunk;
const middlewares = [thunkMiddleware, historyMiddleware];

export const configureStore = (preloadedState: object = {}): Store<IRootStore> => {
	const store: Store<IRootStore> = createStore(
		rootReducer(history),
		preloadedState,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	return store;
};
