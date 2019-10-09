import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { IRootStore } from '@/store/reducers';

export interface IIndexedList<T> {
	[key: string]: T;
}

export type ThunkA<R, A extends Action> = ThunkAction<R, IRootStore, undefined, A>;
