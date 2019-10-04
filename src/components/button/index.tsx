import React, { FC, ReactElement } from 'react';

import './index.scss';

interface IProps {
	type?: 'submit' | 'reset' | 'button';
	children?: React.ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<IProps> = ({ type, children, className, onClick }): ReactElement<HTMLButtonElement> => {
	const classes: string[] = className ? className.split(' ') : [''];
	const classNames: string = ['c-btn'].concat(classes).join(' ');

	return (
		<button className={classNames} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
