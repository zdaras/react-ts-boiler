import React, { memo, FC, ReactNode, SyntheticEvent } from 'react';

import { ButtonStyled } from './button-styled';

export const Button: FC<IProps> = ({ type, children, onClick, active }) => (
	<ButtonStyled type={type} onClick={onClick} active={active}>
		{children}
	</ButtonStyled>
);

export interface IProps {
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;
	onClick?: (e: SyntheticEvent) => void;
	active?: boolean;
}

Button.defaultProps = {
	type: 'button',
	active: false
} as Partial<IProps>;

export default memo(Button);
