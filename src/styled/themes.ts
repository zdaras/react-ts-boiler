import { IIndexedList } from '@/types';

export const themes: IIndexedList<object> = {
	light: {
		type: 'light',
		bgColor: 'white'
	},
	dark: {
		type: 'dark',
		bgColor: '#1F2933'
	}
};
