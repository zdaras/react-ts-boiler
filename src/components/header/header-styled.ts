import styled from 'styled-components';

import { responsive } from '@/styled/responsive';

export const HeaderStyled = styled.header`
	background-color: ${props => props.theme.headerBg};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0.6rem;
	transition: all 0.3s;

	@media ${responsive.md} {
		padding: 1.5rem 2.5rem;
	}
`;
