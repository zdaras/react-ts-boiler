import styled, { css } from 'styled-components';

import config, { DIMENSIONS, IResponsiveTypes, IResponsiveBreakpoints } from './responsive';

interface IFlexProps extends IResponsiveTypes {
	inline?: boolean;
	direction?: 'column' | 'column-reverse' | 'inherit' | 'row' | 'row-reverse' | 'unset';
	wrap?: 'nowrap' | 'wrap-reverse' | 'inherit' | 'wrap' | 'unset';
	justify?: 'center' | 'flex-end' | 'flex-start' | 'inherit' | 'space-around' | 'space-between' | 'stretch' | 'unset';
	alignContent?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'unset';
	align?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'inherit' | 'stretch' | 'unset';
	full?: boolean;
	center?: boolean;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
}

export const Flex = styled.div<IFlexProps>`
	display: flex;
	align-content: stretch;

	${props =>
		props.inline &&
		css`
			display: inline-flex;
		`};

	${props =>
		props.direction &&
		css`
			flex-direction: ${props.direction};
		`};

	${props =>
		props.wrap &&
		css`
			flex-wrap: ${props.wrap};
		`};

	${props =>
		props.justify &&
		css`
			justify-content: ${props.justify};
		`};

	${props =>
		props.alignContent &&
		css`
			align-content: ${props.alignContent};
		`};

	${props =>
		props.align &&
		css`
			align-items: ${props.align};
		`};

	${props =>
		props.full &&
		css`
			width: 100%;
			height: 100%;
			flex-basis: 100%;
		`};

	${props =>
		props.center &&
		css`
			align-items: center;
			justify-content: center;
		`};

	${props =>
		props.width &&
		css`
			width: ${props.width};
		`};

	${props =>
		props.height &&
		css`
			height: ${props.height};
		`};

	${props =>
		props.padding &&
		css`
			padding: ${props.padding};
		`};

	${props =>
		props.margin &&
		css`
			margin: ${props.margin};
		`};

	${props => css`
		${DIMENSIONS.map(
			(d: IResponsiveBreakpoints) =>
				config().breakpoints[d] &&
				config().media[d]`
			${props[d] &&
				`
				// @ts-ignore
				flex: 1 1 ${(props[d] / config().columns[d]) * 100}%;
				// @ts-ignore
        max-width: ${(props[d] / config().columns[d]) * 100}%;
      `}
    `
		)}
	`}
`;

interface IFlexItemProps extends IResponsiveTypes {
	display?: string;
	order?: string | number;
	flex?: string | number;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
}

export const FlexItem = styled.div<IFlexItemProps>`
	flex: 0 1 auto;

	${props =>
		props.display &&
		css`
			display: ${props.display};
		`};

	${props =>
		props.order &&
		css`
			order: ${props.order};
		`};

	${props =>
		props.flex &&
		css`
			flex: ${props.flex};
		`};

	${props =>
		props.width &&
		css`
			width: ${props.width};
		`};

	${props =>
		props.height &&
		css`
			height: ${props.height};
		`};

	${props =>
		props.padding &&
		css`
			padding: ${props.padding};
		`};

	${props =>
		props.margin &&
		css`
			margin: ${props.margin};
		`};

	${props => css`
		${DIMENSIONS.map(
			(d: IResponsiveBreakpoints) =>
				config().breakpoints[d] &&
				config().media[d]`
      ${props[d] &&
				`
				// @ts-ignore
				flex: 1 1 ${(props[d] / config().columns[d]) * 100}%;
				// @ts-ignore
        max-width: ${(props[d] / config().columns[d]) * 100}%;
      `}
    `
		)}
	`}
`;
