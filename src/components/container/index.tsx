import React, { memo, FC, ReactNode } from 'react';

import { StyledContainer } from './container.styled';

export const Container: FC<IProps> = ({ children }) => <StyledContainer>{children}</StyledContainer>;

interface IProps {
	children?: ReactNode;
}

export default memo(Container);
