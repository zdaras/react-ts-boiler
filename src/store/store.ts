import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History, createBrowserHistory } from 'history';
import { Store, Middleware, createStore, applyMiddleware } from 'redux';

import { CounterState } from '@/store/reducers/counter';
import rootReducer from './reducers';

export interface RootStore {
	counter: CounterState;
}

export const history: History = createBrowserHistory();

export function configureStore(): Store<RootStore> {
	const historyMiddleware: Middleware = routerMiddleware(history);

	const store: Store<RootStore> = createStore(
		rootReducer(history),
		{},
		composeWithDevTools(applyMiddleware(historyMiddleware))
	);

	if (module.hot) {
		module.hot.accept();
		store.replaceReducer(require('./reducers').default(history));
	}

	return store;
}
