import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '@/containers/home';

describe('Home component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(<Home />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
