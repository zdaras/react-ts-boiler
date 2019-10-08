import React, { useCallback, FC } from 'react';
import { Dispatch } from 'redux';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes, IThemeMode } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import { IRootStore } from '@/store/reducers';
import { themeSwitch } from '@/store/actions/app';
import Header from '@/components/header';
import Container from '@/components/container';

import { routes, LoadableNotFoundComponent, IRoute } from './routes';

const App: FC<IProps> = ({ theme, dispatch }) => {
	const activeTheme: DefaultTheme = themes[theme];
	const changeTheme = useCallback(() => {
		const themeToSwitch: IThemeMode = theme === 'light' ? 'dark' : 'light';
		dispatch(themeSwitch(themeToSwitch));
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

interface IProps {
	theme: IThemeMode;
	dispatch: Dispatch;
}

const mapStateToProps = (state: IRootStore) => ({
	theme: state.app.theme
});

export default hot(connect(mapStateToProps)(App));
