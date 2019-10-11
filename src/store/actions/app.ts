import { IAppActions } from '@/store/reducers/app';
import { IThemeMode } from '@/styled/themes';
import * as constants from '@/store/constants';
import storage from '@/utils/storage';
import { ThunkA } from '@/types';

export const themeSwitch = (theme: IThemeMode): ThunkA<void, IAppActions> => dispatch => {
	storage('theme').set(theme);
	dispatch({ type: constants.APP_THEME_SWITCH, payload: theme });
};
