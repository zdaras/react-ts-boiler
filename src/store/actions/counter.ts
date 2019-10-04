import { ICounterAction } from '@/store/reducers/counter';
import * as constants from '@/store/constants';

export const increment = (): ICounterAction => ({ type: constants.INCREMENT, payload: { count: 1 } });

export const decrement = (): ICounterAction => ({ type: constants.DECREMENT, payload: { count: -1 } });
