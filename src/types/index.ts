import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { IRootStore } from '@/store/reducers';

export type ThunkA<R, A extends Action> = ThunkAction<R, IRootStore, undefined, A>;
