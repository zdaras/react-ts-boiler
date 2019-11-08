import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Api from '@/services/api';
import { Flex } from '@/styled/flex';
import { IUser } from '@/types/models/user';
import { Button } from '@/components/library/button';

export const Home = () => {
	const { t } = useTranslation();
	const [users, setUsers] = useState<IUser[]>([]);
	const fetchUsers = async () => {
		const { data } = await Api.user.getUsers();
		setUsers(data);
	};

	return (
		<Flex center>
			<Flex center sm={6} xs={8} padding="1rem">
				<Button onClick={fetchUsers}>{t('Main page')}</Button>
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
