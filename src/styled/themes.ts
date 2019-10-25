export const themes = {
	light: {
		type: 'light',
		bgColor: '#fdfdfd',
		btnColor: '#000',
		fontFamily: 'sans-serif',
		headerBg: '#f1f1f1'
	},
	dark: {
		type: 'dark',
		bgColor: '#1F2933',
		btnColor: '#f1f1f1',
		fontFamily: 'sans-serif',
		headerBg: '#b4cee8'
	}
};

export type ITheme = typeof themes['light'];
export type IThemeMode = 'light' | 'dark';

export const defaultTheme: IThemeMode = 'light';
