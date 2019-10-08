import { IAppAction } from '@/store/reducers/app';
import { IThemeMode } from '@/styled/themes';
import * as constants from '@/store/constants';

export const themeSwitch = (theme: IThemeMode): IAppAction => {
	localStorage.setItem('theme', theme);
	return { type: constants.APP_THEME_SWITCH, payload: theme };
};
