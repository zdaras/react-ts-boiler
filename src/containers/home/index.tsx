import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from '@/components/button';
import { RootStore } from '@/store/reducers';
import { CounterState } from '@/store/reducers/counter';
import { increment, decrement } from '@/store/actions/counter';

interface Props {
	counter: CounterState;
	dispatch: Dispatch;
}

export const Home: React.FC<Props> = ({ counter, dispatch }) => (
	<>
		<div className="o-wrapper">
			<Button onClick={() => dispatch(decrement())}>-</Button>

			<small>{counter.count}</small>

			<Button onClick={() => dispatch(increment())}>+</Button>

			<Link to="/home">HOME</Link>
		</div>
	</>
);

const mapStateToProps = (state: RootStore) => ({
	counter: state.counter
});

export default connect(mapStateToProps)(Home);
