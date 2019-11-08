import React, { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/components/library/button';
import { HeaderStyled } from './header-styled';

export const Header: FC<IOwnProps> = ({ changeTheme }) => {
	const { i18n } = useTranslation();

	return (
		<HeaderStyled>
			<span>HEADER</span>
			<div>
				<Button onClick={changeTheme}>DARK MODE</Button>
				<Button active={i18n.language === 'en-US'} onClick={() => i18n.changeLanguage('en-US')}>
					EN
				</Button>
				<Button active={i18n.language === 'ka'} onClick={() => i18n.changeLanguage('ka')}>
					KA
				</Button>
			</div>
		</HeaderStyled>
	);
};

interface IOwnProps {
	changeTheme: () => void;
}

export default memo(Header);
