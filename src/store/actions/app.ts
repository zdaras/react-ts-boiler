import { IAppActions } from '@/store/reducers/app';
import { IThemeMode } from '@/styled/themes';
import { APP_CONSTANTS } from '@/store/constants';
import storage from '@/utils/storage';
import { ThunkA } from '@/types';

export const themeSwitch = (theme: IThemeMode): ThunkA<void, IAppActions> => dispatch => {
	storage('theme').set(theme);
	dispatch({ type: APP_CONSTANTS.APP_THEME_SWITCH, payload: theme });
};
