import React from 'react';
import Loadable from 'react-loadable';

export interface IRoute {
	path?: string;
	exact?: boolean;
	component: any;
}

export const LoadableHomeComponent: any = Loadable({
	loader: () => import('@/containers/home').then((comp: any) => comp),
	loading: () => <div className="c-loader" />
});

export const LoadableNotFoundComponent: any = Loadable({
	loader: () => import('@/containers/not-found').then((comp: any) => comp),
	loading: () => <div className="c-loader" />
});

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: LoadableHomeComponent
	}
];

export const router = [{ routes }];
