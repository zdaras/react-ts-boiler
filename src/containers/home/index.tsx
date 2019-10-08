import React, { FC } from 'react';
import { connect } from 'react-redux';

import Button from '@/components/button';
import { IRootStore } from '@/store/reducers';
import { ICounterState } from '@/store/reducers/counter';
import * as counterActions from '@/store/actions/counter';

export const Home: FC<IStateProps & IDispatchProps> = ({ counter, increment, decrement }) => (
	<main>
		<Button onClick={() => decrement()}>-</Button>

		<small>{counter.count}</small>

		<Button onClick={() => increment()}>+</Button>
	</main>
);

interface IStateProps {
	counter: ICounterState;
}
interface IDispatchProps {
	increment: () => void;
	decrement: () => void;
}

const mapStateToProps = (state: IRootStore): IStateProps => ({
	counter: state.counter
});

const mapDispatchToProps: IDispatchProps = {
	increment: counterActions.increment,
	decrement: counterActions.decrement
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
