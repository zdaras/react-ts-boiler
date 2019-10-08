import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import { IRootStore } from '@/store/reducers';

import { routes, LoadableNotFoundComponent, IRoute } from './routes';

const App: FC<IStateProps> = ({ theme }) => {
	const activeTheme: DefaultTheme = themes[theme];

	return (
		<ThemeProvider theme={activeTheme}>
			<>
				<GlobalStyle />
				<Switch>
					{routes.map((r: IRoute) => (
						<Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
					))}
					<Route component={LoadableNotFoundComponent} />
				</Switch>
			</>
		</ThemeProvider>
	);
};

interface IStateProps {
	theme: string;
}

const mapStateToProps = (state: IRootStore): IStateProps => ({
	theme: state.app.theme
});

export default hot(connect(mapStateToProps)(App));
