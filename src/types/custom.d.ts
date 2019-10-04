declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.jpg' {
	const content: any;
	export default content;
}

declare module '*.png' {
	const content: any;
	export default content;
}

declare module '*.json' {
	const content: any;
	export default content;
}

declare var module: any;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
