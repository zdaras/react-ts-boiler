import React, { memo, FC, ReactElement, ReactNode, SyntheticEvent } from 'react';

import './index.scss';

interface IOwnProps {
	type?: 'submit' | 'reset' | 'button';
	children?: ReactNode;
	className?: string;
	onClick?: (e: SyntheticEvent) => void;
}

export const Button: FC<IOwnProps> = ({ type, children, className, onClick }): ReactElement<HTMLButtonElement> => {
	const classes: string[] = className ? className.split(' ') : [''];
	const classNames: string = ['c-btn'].concat(classes).join(' ');

	return (
		<button className={classNames} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default memo(Button);
