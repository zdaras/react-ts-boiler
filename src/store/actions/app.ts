import { IAppAction } from '@/store/reducers/app';
import { IThemeMode } from '@/styled/themes';
import * as constants from '@/store/constants';
import storage from '@/utils/storage';

export const themeSwitch = (theme: IThemeMode): IAppAction => {
	storage('theme').set(theme);
	return { type: constants.APP_THEME_SWITCH, payload: theme };
};
