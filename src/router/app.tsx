import React, { useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import * as appActions from '@/store/actions/app';
import Header from '@/components/header';
import Container from '@/components/library/container';
import useActions from '@/hooks/useActions';
import { themeSelector } from '@/store/selectors/app';

import { routes, LoadableNotFoundComponent, IRoute } from './routes';

const App = () => {
	const theme = useSelector(themeSelector);
	const themeSwitch = useActions(appActions.themeSwitch);
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

export default hot(App);
