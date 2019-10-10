import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';

import { PATHS } from './paths';
import {
	tsConfigDev,
	htmlConfig,
	cssConfig,
	fontsConfig,
	svgConfig,
	svgCSSConfig,
	imagesConfig,
	mediaConfig
} from './webpack.rules';

interface IConfiguration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: IConfiguration = {
	mode: 'development',
	entry: ['./src/index.tsx'],
	context: PATHS.root,
	output: {
		path: PATHS.dist,
		filename: '[name].js',
		sourceMapFilename: '[name].bundle.map',
		chunkFilename: '[name].chunk.js',
		publicPath: '/'
	},
	module: {
		rules: [tsConfigDev, htmlConfig, cssConfig, fontsConfig, svgConfig, svgCSSConfig, imagesConfig, mediaConfig]
	},
	resolve: {
		alias: {
			'@': PATHS.src,
			'@src': PATHS.src,
			'@root': PATHS.root,
			'@assets': PATHS.assets,
			'@utilities': PATHS.utilities,
			'@components': PATHS.components,
			'@containers': PATHS.containers,
			'react-dom': '@hot-loader/react-dom'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		modules: ['src', 'node_modules']
	},
	plugins: [
		new Dotenv({ path: PATHS.envDevelopment }),
		new HtmlWebPackPlugin({
			template: './src/assets/index.html',
			filename: './index.html',
			inject: true
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
		new CopyWebpackPlugin([{ from: 'src/assets/', to: 'assets/', ignore: ['*.scss'] }]),
		new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
		new webpack.HotModuleReplacementPlugin()
	],
	cache: true,
	bail: false,
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		noInfo: true,
		clientLogLevel: 'error',
		stats: 'none',
		contentBase: './dist',
		historyApiFallback: true
	},
	stats: 'errors-only',
	performance: { hints: false },
	optimization: { splitChunks: { chunks: 'all' } }
};

module.exports = config;
