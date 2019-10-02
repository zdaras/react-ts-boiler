import * as React from 'react';
import SVG from 'react-inlinesvg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from '@/components/button';
import { RootStore } from '@/store/store';
import { CounterState } from '@/store/reducers/counter';
import { increment, decrement } from '@/store/actions/counter';
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from '@/store/constants';

interface Counter {
	count: number;
}

interface Props {
	readonly counter: Counter;
	readonly dispatch: Dispatch;
}

export const Home: React.FC<Props> = ({ counter, dispatch }) => (
	<React.Fragment>
		<SVG src="assets/react.svg" className="c-svg-icon" />

		<div className="o-wrapper">
			<Button onClick={() => dispatch(decrement())}>-</Button>

			<Button onClick={() => dispatch({ type: DECREMENT_ASYNC })}>Async -</Button>

			<small>{counter.count}</small>

			<Button onClick={() => dispatch({ type: INCREMENT_ASYNC })}>Async +</Button>

			<Button onClick={() => dispatch(increment())}>+</Button>
		</div>
	</React.Fragment>
);

export default connect((store: RootStore): {
	readonly counter: CounterState;
} => ({
	counter: store.counter
}))(Home);
