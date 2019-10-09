export const themes = {
	light: {
		type: 'light',
		bgColor: '#fdfdfd',
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
