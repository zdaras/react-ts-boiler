import { ITheme } from './themes';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
