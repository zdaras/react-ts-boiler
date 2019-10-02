import { CounterAction } from '@/store/reducers/counter';
import * as constants from '@/store/constants';

export const increment = (): CounterAction => ({ type: constants.INCREMENT, payload: { count: 1 } });

export const decrement = (): CounterAction => ({ type: constants.DECREMENT, payload: { count: -1 } });
