import { APP_CONSTANTS, IAppActions, IAppState } from './types';

const initialState: IAppState = {
	theme: 'light'
};

const reducer = (state = initialState, action: IAppActions): IAppState => {
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

export default reducer;
