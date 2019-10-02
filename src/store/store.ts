import { routerMiddleware, connectRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History, createBrowserHistory } from 'history';
import { Store, Middleware, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CounterState } from '@/store/reducers/counter';
import rootReducer from './reducers';

export interface RootStore {
	counter: CounterState;
}

export const history: History = createBrowserHistory();

export const configureStore = (): Store<RootStore> => {
	const historyMiddleware: Middleware = routerMiddleware(history);
	const thunkMiddleware: Middleware = thunk;
	const middlewares = [thunkMiddleware, historyMiddleware];

	const store: Store<RootStore> = createStore(
		// connectRouter(history)(rootReducer(history)),
		rootReducer(history),
		{},
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	if (process.env.NODE_ENV === 'development') {
		if (module.hot) {
			module.hot.accept();
			store.replaceReducer(require('./reducers').default(history));
		}
	}

	return store;
};
