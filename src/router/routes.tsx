import Loadable from 'react-loadable';

export interface IRoute {
	path?: string;
	exact?: boolean;
	component: any;
}

export const LoadableHomeComponent: any = Loadable({
	loader: () => import('@/pages/home').then((comp: any) => comp),
	loading: () => null
});

export const LoadableNotFoundComponent: any = Loadable({
	loader: () => import('@/pages/not-found').then((comp: any) => comp),
	loading: () => null
});

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: LoadableHomeComponent
	}
];

export const router = [{ routes }];
