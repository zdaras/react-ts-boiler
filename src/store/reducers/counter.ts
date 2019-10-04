import * as constants from '@/store/constants';

export interface ICounterState {
	count: number;
}

export interface ICounterAction {
	type: string;
	payload: ICounterState;
}

const initialState: ICounterState = {
	count: 0
};

export default (state: ICounterState = initialState, action: ICounterAction) => {
	switch (action.type) {
		case constants.INCREMENT:
		case constants.DECREMENT:
			return {
				...state,
				count: state.count + action.payload.count
			};

		default:
			return state;
	}
};
