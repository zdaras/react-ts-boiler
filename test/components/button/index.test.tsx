import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@/components/library/button';

describe('Button component', () => {
	it('should render successfully', () => {
		const tree = renderer.create(<Button />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
