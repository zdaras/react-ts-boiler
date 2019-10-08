import * as constants from '@/store/constants';
import { IThemeMode } from '@/styled/themes';

export interface IAppState {
	theme: IThemeMode;
}

export interface IAppAction {
	type: string;
	payload: IThemeMode;
}

const initialState: IAppState = {
	theme: 'light'
};

const appReducer = (state: IAppState = initialState, action: IAppAction) => {
	switch (action.type) {
		case constants.APP_THEME_SWITCH:
			return {
				...state,
				theme: action.payload
			};

		default:
			return state;
	}
};

export default appReducer;
