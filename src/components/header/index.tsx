import React, { memo, FC } from 'react';

import Button from '@/components/library/button';
import { HeaderStyled } from './header-styled';

export const Header: FC<IOwnProps> = ({ changeTheme }) => (
	<HeaderStyled>
		<span>HEADER</span>
		<Button onClick={changeTheme}>SWITCH</Button>
	</HeaderStyled>
);

interface IOwnProps {
	changeTheme: () => void;
}

export default memo(Header);
