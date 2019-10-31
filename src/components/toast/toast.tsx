import React, { memo, useState, FC } from 'react';

import useActions from '@/hooks/useActions';
import toastDuck from '@/store/ducks/toast';
import { IToast } from '@/store/ducks/toast/toast.types';
import timer from '@/utils/timer';
import { CheckIcon, ErrorOutlineIcon, ExclamationIcon, WarningIcon } from '@/components/icons';

import { ToastStyled, ToastIconStyled, ToastTextStyled } from './toast-styled';

export const Toast: FC<IProps> = ({ toast }) => {
	const [countdown] = useState(toast.timeout || 0);
	const hideToast = useActions(toastDuck.actions.hideToast);
	const autoHideTimer = timer(toast.autoClose ? () => hideToast(toast) : () => false, countdown);
	const handleMouseEnter = (): void => autoHideTimer.pause();
	const handleMouseLeave = (): void => autoHideTimer.resume();
	const handleOnClick = (t: IToast): void => {
		if (t.closeOnClick) autoHideTimer.cancel(true);
	};

	return (
		<ToastStyled
			onClick={() => handleOnClick(toast)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			type={toast.type}
		>
			<ToastIconStyled type={toast.type}>
				{(() => {
					switch (toast.type) {
						case 'info':
							return <ExclamationIcon />;
						case 'success':
							return <CheckIcon />;
						case 'warning':
							return <WarningIcon />;
						case 'danger':
							return <ErrorOutlineIcon />;
						default:
							return null;
					}
				})()}
			</ToastIconStyled>
			<ToastTextStyled>{toast.text}</ToastTextStyled>
		</ToastStyled>
	);
};

interface IProps {
	toast: IToast;
}

export default memo(Toast);
