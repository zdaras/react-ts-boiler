import { get } from '../axios';

import { IUser } from '@/types/models/user';

export default {
	getUsers: () => get<IUser[]>('users')
};
