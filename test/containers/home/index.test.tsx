import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '@/containers/home';

jest.mock('react-inlinesvg');

describe('Home component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(<Home counter={{ count: 0 }} increment={jest.fn()} decrement={jest.fn()} />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
