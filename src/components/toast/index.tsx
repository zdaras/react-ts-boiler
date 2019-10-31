import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { toastSelectors } from '@/store/ducks/toast';

import { ToastContainerStyled } from './toast-styled';
import Toast from './toast';

export const ToastContainer = () => {
	const toasts = useSelector(toastSelectors.data);
	const showToasts = toasts.length > 0;

	if (!showToasts) return null;

	return (
		<ToastContainerStyled>
			{toasts.map(toast => (
				<Toast key={toast.id} toast={toast} />
			))}
		</ToastContainerStyled>
	);
};

export default memo(ToastContainer);
