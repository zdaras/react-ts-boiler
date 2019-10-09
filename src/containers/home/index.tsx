import React, { FC } from 'react';
import { connect } from 'react-redux';

import Button from '@/components/library/button';
import { IRootStore } from '@/store/reducers';
import * as counterActions from '@/store/actions/counter';

export const Home: FC<IStateProps & IDispatchProps> = ({ counter, increment, decrement }) => (
	<main>
		<Button onClick={decrement}>-</Button>
		<small>{counter.count}</small>
		<Button onClick={increment}>+</Button>
	</main>
);

const mapStateToProps = (state: IRootStore) => ({
	counter: state.counter
});

const mapDispatchToProps = {
	increment: counterActions.increment,
	decrement: counterActions.decrement
};

type IStateProps = ReturnType<typeof mapStateToProps>;

type IDispatchProps = typeof mapDispatchToProps;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
