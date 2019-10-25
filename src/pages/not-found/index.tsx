import React, { FC, ReactElement } from 'react';

export const NotFound: FC = (): ReactElement<HTMLDivElement> => (
	<div className="c-not-found">
		404 <br />
		Page not found
	</div>
);

export default NotFound;
