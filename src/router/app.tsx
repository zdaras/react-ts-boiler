import React, { useCallback, FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import { IRootStore } from '@/store/reducers';
import * as appActions from '@/store/actions/app';
import Header from '@/components/header';
import Container from '@/components/library/container';

import { routes, LoadableNotFoundComponent, IRoute } from './routes';

const App: FC<TProps> = ({ theme, themeSwitch }) => {
	const activeTheme: DefaultTheme = themes[theme];
	const changeTheme = useCallback(() => {
		const themeToSwitch = theme === 'light' ? 'dark' : 'light';
		themeSwitch(themeToSwitch);
	}, [theme]);

	return (
		<ThemeProvider theme={activeTheme}>
			<>
				<GlobalStyle />
				<Container>
					<Header changeTheme={changeTheme} />
					<Switch>
						{routes.map((r: IRoute) => (
							<Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
						))}
						<Route component={LoadableNotFoundComponent} />
					</Switch>
				</Container>
			</>
		</ThemeProvider>
	);
};

const mapStateToProps = (state: IRootStore) => ({
	theme: state.app.theme
});

const mapDispatchToProps = {
	themeSwitch: appActions.themeSwitch
};

type TStateProps = ReturnType<typeof mapStateToProps>;

type TDispatchProps = typeof mapDispatchToProps;

type TProps = TStateProps & TDispatchProps;

export default hot(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
