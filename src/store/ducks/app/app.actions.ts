import { ThunkA } from '@/types';
import storage from '@/utils/storage';
import { IThemeMode } from '@/styled/themes';

import app from '.';

export const themeSwitchAction = (theme: IThemeMode): ThunkA => dispatch => {
	storage('theme').set(theme);
	dispatch(app.actions.themeSwitch(theme));
};
