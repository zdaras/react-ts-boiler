import React, { memo, FC } from 'react';

import Button from '@/components/library/button';
import { StyledHeader } from './header.styled';

export const Header: FC<IOwnProps> = ({ changeTheme }) => (
	<StyledHeader>
		<span>HEADER</span>
		<Button onClick={changeTheme}>SWITCH</Button>
	</StyledHeader>
);

interface IOwnProps {
	changeTheme: () => void;
}

export default memo(Header);
