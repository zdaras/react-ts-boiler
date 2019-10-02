import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History, createBrowserHistory } from 'history';
import { Store, Middleware, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { RootStore } from './reducers';

export const history: History = createBrowserHistory();
const historyMiddleware: Middleware = routerMiddleware(history);
const thunkMiddleware: Middleware = thunk;
const middlewares = [thunkMiddleware, historyMiddleware];

export const configureStore = (preloadedState: object = {}): Store<RootStore> => {
	const store: Store<RootStore> = createStore(
		rootReducer(history),
		preloadedState,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	return store;
};
