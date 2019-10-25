import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { IRootStore } from '@/store/ducks/root-reducer';

export type ThunkA<Return, A extends Action> = ThunkAction<Return, IRootStore, undefined, A>;
