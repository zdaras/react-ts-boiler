import React, { FC } from 'react';

import { ContainerStyled } from './container-styled';

export const Container: FC = ({ children }) => <ContainerStyled>{children}</ContainerStyled>;

export default Container;
