import { Action as ReduxAction, AnyAction } from '@reduxjs/toolkit';

import { IRootStore } from '@/store/ducks/root-reducer';

interface ThunkDispatch<S, E, A extends ReduxAction> {
	<T extends A>(action: T): T;
	<R>(asyncAction: ThunkAction<R, S, E, A>): R;
}

type ThunkAction<R, S, E, A extends ReduxAction> = (
	dispatch: ThunkDispatch<S, E, A>,
	getState: () => S,
	extraArgument: E
) => R;

export type ThunkA<Return = void, A extends AnyAction = AnyAction> = ThunkAction<Return, IRootStore, undefined, A>;

export interface Action<T = string, P = any> {
	type?: T;
	payload?: P;
}

export type ThenArg<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer U> ? U : T;

// @ts-ignore
export type AxiosData<T, K = 'data'> = ThenArg<T>[K];
