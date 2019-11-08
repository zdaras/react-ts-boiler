import React from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from '@/styled/flex';

export const Home = () => {
	const { t } = useTranslation();

	return (
		<Flex center>
			<Flex center sm={6} xs={8} padding="1rem">
				<span>{t('Main page')}</span>
			</Flex>
		</Flex>
	);
};

export default Home;
