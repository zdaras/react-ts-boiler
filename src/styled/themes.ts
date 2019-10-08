import { IIndexedList } from '@/types';

export const themes: IIndexedList<object> = {
	light: {
		type: 'light',
		bgColor: 'white',
		btnColor: '#000',
		fontFamily: 'sans-serif'
	},
	dark: {
		type: 'dark',
		bgColor: '#1F2933',
		btnColor: '#f1f1f1',
		fontFamily: 'sans-serif'
	}
};

export type ITheme = typeof themes['light'];
export type IThemeMode = 'light' | 'dark';
