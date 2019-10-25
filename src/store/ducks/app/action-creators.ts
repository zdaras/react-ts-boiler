import { ThunkA } from '@/types';
import storage from '@/utils/storage';
import { IThemeMode } from '@/styled/themes';

import { APP_CONSTANTS, IAppActions } from './types';

export const themeSwitch = (theme: IThemeMode): ThunkA<void, IAppActions> => dispatch => {
	storage('theme').set(theme);
	dispatch({ type: APP_CONSTANTS.APP_THEME_SWITCH, payload: theme });
};
