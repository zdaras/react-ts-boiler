import { IThemeMode } from '@/styled/themes';

export enum APP_CONSTANTS {
	APP_THEME_SWITCH = 'app/THEME_SWITCH'
}

export interface IAppState {
	theme: IThemeMode;
}

export interface IAppThemeAction {
	type: APP_CONSTANTS.APP_THEME_SWITCH;
	payload: IThemeMode;
}

export type IAppActions = IAppThemeAction;
