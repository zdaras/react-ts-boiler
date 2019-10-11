import { css } from 'styled-components';

const size = {
	xs: 1, // mobile 10px
	sm: 48, // tablet 768px
	md: 64, // laptop 1024px
	lg: 90, // computer 1440px
	xl: 120 // large screen 1920px
};

export const responsive = {
	xs: `(min-width: ${size.xs}rem)`,
	sm: `(min-width: ${size.sm}rem)`,
	md: `(min-width: ${size.md}rem)`,
	lg: `(min-width: ${size.lg}rem)`,
	xl: `(min-width: ${size.xl}rem)`
};

// MOBILE FIRST. 16 = width 100%, 8 = 50% .........
type IResponsiveSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

export type IResponsiveBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IResponsiveTypes {
	xs?: IResponsiveSizes;
	sm?: IResponsiveSizes;
	md?: IResponsiveSizes;
	lg?: IResponsiveSizes;
	xl?: IResponsiveSizes;
}

export const DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl'];
const BASE_CONF = {
	mediaQuery: 'only screen',
	columns: {
		xs: 16,
		sm: 16,
		md: 16,
		lg: 16,
		xl: 16
	},
	breakpoints: size,
	media: {}
};

const makeMedia = (media: any) => (...args: any) => css`
	@media ${media} {
		${css(...(args as [any, any]))}
	}
`;

export default function config(): any {
	const conf = BASE_CONF;
	conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
		// @ts-ignore
		const breakpointWidth = conf.breakpoints[breakpoint];
		// @ts-ignore
		media[breakpoint] = makeMedia(
			[conf.mediaQuery, breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`].filter(Boolean).join(' and ')
		);
		return media;
	}, {});

	return conf;
}
