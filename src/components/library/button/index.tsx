import React, { memo, FC, ReactNode, SyntheticEvent } from 'react';

import { StyledButton } from './button.styled';

export const Button: FC<IProps> = ({ type, children, onClick }) => (
	<StyledButton type={type} onClick={onClick}>
		{children}
	</StyledButton>
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
