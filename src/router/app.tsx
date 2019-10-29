import React, { useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import Header from '@/components/header';
import Container from '@/components/library/container';
import useActions from '@/hooks/useActions';
import { appSelectors, appActions } from '@/store/ducks/app';

import { routes, AsyncPage, IRoute } from './routes';

const App = () => {
	const theme = useSelector(appSelectors.theme);
	const themeSwitch = useActions(appActions.themeSwitchAction);
	const activeTheme: DefaultTheme = themes[theme];

	const changeTheme = useCallback(() => {
		const themeToSwitch = theme === 'light' ? 'dark' : 'light';
		themeSwitch(themeToSwitch);
	}, [theme, themeSwitch]);

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
						<Route component={() => <AsyncPage page="not-found" />} />
					</Switch>
				</Container>
			</>
		</ThemeProvider>
	);
};

export default hot(App);
