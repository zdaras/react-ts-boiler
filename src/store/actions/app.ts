import { IAppAction } from '@/store/reducers/app';
import * as constants from '@/store/constants';

export const themeSwitch = (theme: string): IAppAction => {
	localStorage.setItem('theme', theme);
	return { type: constants.APP_THEME_SWITCH, payload: { theme } };
};
