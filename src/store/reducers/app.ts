import * as constants from '@/store/constants';

export interface IAppState {
	theme: string;
}

export interface IAppAction {
	type: string;
	payload: IAppState;
}

const initialState: IAppState = {
	theme: 'light'
};

const appReducer = (state: IAppState = initialState, action: IAppAction) => {
	switch (action.type) {
		case constants.APP_THEME_SWITCH:
			return {
				...state,
				theme: action.payload.theme
			};

		default:
			return state;
	}
};

export default appReducer;
