import { createSelector } from 'reselect';

import { IRootStore } from '@/store/reducers';

export const themeSelector = createSelector(
	(state: IRootStore) => state.app,
	app => app.theme
);
