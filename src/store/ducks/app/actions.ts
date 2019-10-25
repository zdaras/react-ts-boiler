import { IThemeMode } from '@/styled/themes';

import { APP_CONSTANTS, IAppThemeAction } from './types';

export const changeThemeAction = (theme: IThemeMode): IAppThemeAction => ({
	type: APP_CONSTANTS.APP_THEME_SWITCH,
	payload: theme
});
