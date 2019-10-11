import React, { FC } from 'react';
import { connect } from 'react-redux';

import Button from '@/components/library/button';
import { IRootStore } from '@/store/reducers';
import * as counterActions from '@/store/actions/counter';
import { Flex, FlexItem } from '@/styled/flex';

export const Home: FC<TProps> = ({ counter, increment, decrement, name }) => (
	<Flex center>
		<Flex xl={4} lg={4} md={4} sm={6} xs={8} align="center" justify="center" padding="1rem">
			<FlexItem>okkkk</FlexItem>
		</Flex>
		<Flex xl={4} lg={4} md={4} sm={6} xs={8} align="center" justify="center" padding="1rem">
			<FlexItem>
				<Button onClick={decrement}>-</Button>
				<small>{name}</small>
				<small>{counter.count}</small>
				<Button onClick={increment}>+</Button>
			</FlexItem>
		</Flex>
	</Flex>
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
