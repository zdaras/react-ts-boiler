import * as constants from '@/store/constants';

export interface CounterState {
	count: number;
}

export interface CounterAction {
	type: string;
	payload: number;
}

export const initialState: CounterState = {
	count: 0
};

export default (state = initialState, action: CounterAction) => {
	switch (action.type) {
		case constants.INCREMENT:
		case constants.DECREMENT:
			return {
				...state,
				count: state.count + action.payload
			};

		default:
			return state;
	}
};
