import { createSlice, createSelector } from 'redux-starter-kit';

import { defaultTheme } from '@/styled/themes';
import { IRootStore } from '@/store/ducks/root-reducer';

import { IAppState, IThemeSwitchAction } from './app.types';
import * as actions from './app.actions';

const initialState: IAppState = {
	theme: defaultTheme
};

// slice
const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		themeSwitch: (state, action: IThemeSwitchAction) => ({ ...state, theme: action.payload })
	}
});

// selectors
export const appSelectors = {
	theme: createSelector(
		(state: IRootStore) => state.app,
		app => app.theme
	)
};

// actions
export const appActions = actions;

export default slice;
