import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { install, applyUpdate } from 'offline-plugin/runtime';

import App from '@/app';
import { configureStore, history } from '@/store/store';

export const store = configureStore();

history.listen(() => window.scrollTo(0, 0));

const renderApp = (Application: any) =>
	render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Application />
			</ConnectedRouter>
		</Provider>,
		document.getElementById('app')
	);

renderApp(App);

if (process.env.NODE_ENV === 'production') {
	install({
		onUpdateReady: () => applyUpdate(),
		onUpdated: () => window.location.reload()
	});
}

if (process.env.NODE_ENV === 'development') {
	if (module.hot) {
		module.hot.accept('./app', () => {
			renderApp(require('./app').default);
		});
		module.hot.accept('./store/reducers', () => {
			store.replaceReducer(require('./store/reducers').default(history));
		});
	}
}
