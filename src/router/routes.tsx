import React from 'react';
import loadable from '@loadable/component';

export const AsyncPage: any = loadable((props: IAsyncPageProps): any => import(`@/pages/${props.page}`));

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: () => <AsyncPage page="home" />
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
