import { createSelector } from 'reselect';

import { IRootStore } from '@/store/ducks/root-reducer';

export const themeSelector = createSelector(
	(state: IRootStore) => state.app,
	app => app.theme
);
