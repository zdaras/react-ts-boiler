import { ICounterAction } from '@/store/reducers/counter';
import { COUNTER_CONSTANTS } from '@/store/constants';

export const increment = (): ICounterAction => ({ type: COUNTER_CONSTANTS.INCREMENT, payload: { count: 1 } });

export const decrement = (): ICounterAction => ({ type: COUNTER_CONSTANTS.DECREMENT, payload: { count: -1 } });
