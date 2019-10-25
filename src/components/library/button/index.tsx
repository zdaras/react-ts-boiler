import React, { memo, FC, ReactNode, SyntheticEvent } from 'react';

import { ButtonStyled } from './button-styled';

export const Button: FC<IProps> = ({ type, children, onClick }) => (
	<ButtonStyled type={type} onClick={onClick}>
		{children}
	</ButtonStyled>
);

export interface IProps {
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;
	onClick?: (e: SyntheticEvent) => void;
}

Button.defaultProps = {
	type: 'button'
} as Partial<IProps>;

export default memo(Button);
