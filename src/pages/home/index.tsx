import React from 'react';
import { useTranslation } from 'react-i18next';

import Api from '@/services/api';
import { Flex } from '@/styled/flex';
import useApi from '@/hooks/useApi';

export const Home = () => {
	const { t } = useTranslation();
	const [users] = useApi(Api.user.getUsers);

	return (
		<Flex center>
			<Flex center sm={6} xs={8} padding="1rem">
				<span>{t('Main page')}</span>
			</Flex>
			<Flex direction="column" center sm={6} xs={8} padding="1rem">
				{users.map(u => (
					<div key={u.id}>{u.username}</div>
				))}
			</Flex>
		</Flex>
	);
};

export default Home;
