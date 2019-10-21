import { APP_CONSTANTS } from '@/store/constants';
import { IThemeMode } from '@/styled/themes';

const initialState: IAppState = {
	theme: 'light'
};

const appReducer = (state = initialState, action: IAppActions): IAppState => {
	switch (action.type) {
		case APP_CONSTANTS.APP_THEME_SWITCH:
			return {
				...state,
				theme: action.payload
			};

		default:
			return state;
	}
};

export interface IAppState {
	theme: IThemeMode;
}

interface IAppThemeAction {
	type: APP_CONSTANTS.APP_THEME_SWITCH;
	payload: IThemeMode;
}

export type IAppActions = IAppThemeAction;

export default appReducer;
