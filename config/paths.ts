import path from 'path';

export const resolve: (path: string) => string = path.resolve.bind(__dirname);

export const PATHS: Record<string, string> = {
	src: resolve('./src'),
	root: resolve('./'),
	dist: resolve('./dist'),
	assets: resolve('./src/assets'),
	utilities: resolve('./src/utilities'),
	components: resolve('./src/components'),
	containers: resolve('./src/containers'),
	nodeModules: resolve('./node_modules'),
	env: resolve('./.env'),
	envDevelopment: resolve('./.env.development')
};
