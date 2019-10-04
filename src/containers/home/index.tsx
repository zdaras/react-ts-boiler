import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from '@/components/button';
import { RootStore } from '@/store/reducers';
import { ICounterState } from '@/store/reducers/counter';
import { increment, decrement } from '@/store/actions/counter';

export const Home: FC<IProps> = ({ counter, dispatch }): ReactElement<HTMLDivElement> => (
	<div className="o-wrapper">
		<Button onClick={() => dispatch(decrement())}>-</Button>

		<small>{counter.count}</small>

		<Button onClick={() => dispatch(increment())}>+</Button>
	</div>
);

interface IProps {
	counter: ICounterState;
	dispatch: Dispatch;
}

const mapStateToProps = (state: RootStore): { counter: ICounterState } => ({
	counter: state.counter
});

export default connect(mapStateToProps)(Home);
