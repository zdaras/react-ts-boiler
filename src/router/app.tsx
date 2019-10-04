import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import '@/assets/scss/app.scss';

import { routes, LoadableNotFoundComponent } from './routes';

const App = hot(() => (
	<Switch>
		{routes.map(r => (
			<Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
		))}
		<Route component={LoadableNotFoundComponent} />
	</Switch>
));

export default App;
