import { IThemeMode } from '@/styled/themes';
import { Action } from '@/types';

export interface IAppState {
	theme: IThemeMode;
}

export interface IThemeSwitchAction extends Action {
	payload: IThemeMode;
}
