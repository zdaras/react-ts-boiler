import { COUNTER_CONSTANTS } from '@/store/constants';

const initialState: ICounterState = {
	count: 0
};

const counterReducer = (state: ICounterState = initialState, action: ICounterAction): ICounterState => {
	switch (action.type) {
		case COUNTER_CONSTANTS.INCREMENT:
		case COUNTER_CONSTANTS.DECREMENT:
			return {
				...state,
				count: state.count + action.payload.count
			};

		default:
			return state;
	}
};

export interface ICounterState {
	count: number;
}

export interface ICounterAction {
	type: string;
	payload: ICounterState;
}

export default counterReducer;
