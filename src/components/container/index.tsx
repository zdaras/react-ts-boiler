import React, { FC } from 'react';

import { StyledContainer } from './container.styled';

export const Container: FC = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
