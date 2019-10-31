import { ThunkA } from '@/types';
import { randomInt } from '@/utils/helpers';

import toast from '.';
import { IToast, IPartialToast } from './toast.types';

const defaultOptions = (): IToast => ({
	id: randomInt(),
	text: '',
	type: 'info',
	autoClose: true,
	closeOnClick: true,
	position: 'topRight',
	timeout: 5000
});

const show = (options: IPartialToast): ThunkA => dispatch => {
	const opts = { ...defaultOptions(), ...options };
	dispatch(toast.actions.showToast(opts));
};

export const info = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'info' });

export const success = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'success' });

export const warning = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'warning' });

export const danger = (text: string, options: IPartialToast = {}) => show({ ...options, text, type: 'danger' });
