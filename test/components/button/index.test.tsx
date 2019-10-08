import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@/components/button';

describe('Button component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(<Button ok="l" />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
