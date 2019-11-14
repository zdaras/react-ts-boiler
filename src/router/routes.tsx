import React from 'react';
import { RouteComponentProps } from 'react-router';
import loadable from '@loadable/component';

export const AsyncPage: any = loadable((props: IAsyncPageProps): any =>
	import(/* webpackPrefetch: true */ `@/pages/${props.page}`)
);

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: (props: RouteComponentProps) => <AsyncPage page="home" {...props} />
	}
];

export const router = [{ routes }];

interface IAsyncPageProps {
	page: string;
}

export interface IRoute {
	path?: string;
	exact?: boolean;
	component: any;
}
