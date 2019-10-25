import { ThunkA } from '@/types';
import storage from '@/utils/storage';
import { IThemeMode } from '@/styled/themes';

import { IAppActions } from './types';
import { changeThemeAction } from './actions';

export const themeSwitch = (theme: IThemeMode): ThunkA<void, IAppActions> => dispatch => {
	storage('theme').set(theme);
	dispatch(changeThemeAction(theme));
};
