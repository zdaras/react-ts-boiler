import styled, { keyframes } from 'styled-components';

import { IToast } from '@/store/ducks/toast/toast.types';

interface IToastStyled {
	type: IToast['type'];
}

const fade = keyframes({
	from: {
		opacity: 0,
		transform: 'scale(0.97)'
	},
	to: {
		opacity: 1,
		transform: 'scale(1)'
	}
});

export const ToastContainerStyled = styled.div`
	position: absolute;
	right: 1.2rem;
	top: 1.2rem;
	max-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const ToastStyled = styled.div<IToastStyled>`
	position: relative;
	display: flex;
	align-items: center;
	transition: all 0.3s ease-in-out;
	animation: ${fade} 0.5s;
	z-index: 3;
	word-wrap: break-word;
	width: 340px;
	border-radius: 4px;
	color: #0b460d;
	overflow: hidden;
	margin-bottom: 0.8rem;
	max-height: 150px;
	font-weight: 700;
	cursor: pointer;

	background: ${({ type }) => {
		switch (type) {
			case 'info':
				return '#73c8ff';
			case 'success':
				return '#72efa8';
			case 'warning':
				return '#ffc107';
			case 'danger':
				return '#f96363';
			default:
				return '#73c8ff';
		}
	}};

	:hover {
		filter: brightness(0.9);
	}
`;

export const ToastIconStyled = styled.div<IToastStyled>`
	padding: 0 8px;
	position: absolute;
	display: flex;
	align-items: center;
	height: 100%;

	background: ${({ type }) => {
		switch (type) {
			case 'info':
				return '#6ab1e0';
			case 'success':
				return '#17ca65';
			case 'warning':
				return '#daa70e';
			case 'danger':
				return '#dc5046';
			default:
				return '#6ab1e0';
		}
	}};
`;

export const ToastTextStyled = styled.div`
	padding: 10px 12px;
	margin-left: 40px;
	user-select: none;
`;
