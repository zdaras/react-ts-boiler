import React, { FC } from 'react';
import { connect } from 'react-redux';

import Button from '@/components/library/button';
import { IRootStore } from '@/store/reducers';
import * as counterActions from '@/store/actions/counter';

export const Home: FC<TProps> = ({ counter, increment, decrement, name }) => (
	<main>
		<Button onClick={decrement}>-</Button>
		<small>{name}</small>
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

type TStateProps = ReturnType<typeof mapStateToProps>;

type TDispatchProps = typeof mapDispatchToProps;

type TOwnProps = {
	name?: string;
};

type TProps = TStateProps & TDispatchProps & TOwnProps;

Home.defaultProps = {
	name: 'Count :'
} as Partial<TOwnProps>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
