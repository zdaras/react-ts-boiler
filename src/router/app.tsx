import React, { useCallback, FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { themes, IThemeMode } from '@/styled/themes';
import { GlobalStyle } from '@/styled/global';
import { IRootStore } from '@/store/reducers';
import { themeSwitch as themeSwitchAction, IThemeSwitch } from '@/store/actions/app';
import Header from '@/components/header';
import Container from '@/components/container';

import { routes, LoadableNotFoundComponent, IRoute } from './routes';

const App: FC<IStateProps & IDispatchProps> = ({ theme, themeSwitch }) => {
	const activeTheme: DefaultTheme = themes[theme];
	const changeTheme = useCallback(() => {
		const themeToSwitch: IThemeMode = theme === 'light' ? 'dark' : 'light';
		themeSwitch(themeToSwitch);
	}, [theme]);

	return (
		<ThemeProvider theme={activeTheme}>
			<Container>
				<GlobalStyle />
				<Header changeTheme={changeTheme} />
				<Switch>
					{routes.map((r: IRoute) => (
						<Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
					))}
					<Route component={LoadableNotFoundComponent} />
				</Switch>
			</Container>
		</ThemeProvider>
	);
};

interface IStateProps {
	theme: IThemeMode;
}

interface IDispatchProps {
	themeSwitch: IThemeSwitch;
}

const mapStateToProps = (state: IRootStore): IStateProps => ({
	theme: state.app.theme
});

const mapDispatchToProps = {
	themeSwitch: themeSwitchAction
};

export default hot(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
