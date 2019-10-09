import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

import { PATHS, resolve } from './paths';
import {
	tsConfig,
	htmlConfig,
	cssConfig,
	fontsConfig,
	svgConfig,
	svgCSSConfig,
	imagesConfig,
	mediaConfig
} from './webpack.rules';

// because there are no type definitions available
const OfflinePlugin: any = require('offline-plugin');

const config: WebpackConfiguration = {
	mode: 'production',
	entry: ['./src/index.tsx'],
	context: PATHS.root,
	output: {
		path: PATHS.dist,
		filename: '[name].[chunkhash].bundle.js',
		sourceMapFilename: '[name].[chunkhash].bundle.map',
		chunkFilename: '[name].[chunkhash].chunk.js',
		publicPath: '/'
	},
	module: {
		rules: [tsConfig, htmlConfig, cssConfig, fontsConfig, svgConfig, svgCSSConfig, imagesConfig, mediaConfig]
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
		new Dotenv({ path: PATHS.env }),
		new HtmlWebPackPlugin({
			template: './src/assets/index.html',
			filename: './index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
		new CopyWebpackPlugin([{ from: 'src/assets/', to: 'assets/', ignore: ['*.scss'] }]),
		new MiniCssExtractPlugin({ filename: '[name].[hash].css', chunkFilename: '[id].[hash].css' }),
		new OfflinePlugin({
			relativePaths: false,
			publicPath: '/',
			appShell: '/',
			caches: {
				main: [':rest:'],
				additional: ['*.chunk.js']
			},
			safeToUseOptionalCaches: true
		}),
		new WebpackPwaManifest({
			name: 'React Template',
			short_name: 'React TPL',
			description: 'A React application!',
			background_color: '#cccccc',
			theme_color: '#333333',
			inject: true,
			ios: true,
			icons: [
				{
					src: resolve('src/assets/icon-512x512.png'),
					sizes: [72, 96, 128, 144, 192, 384, 512]
				},
				{
					src: resolve('src/assets/icon-512x512.png'),
					sizes: [120, 152, 167, 180],
					ios: true
				}
			]
		})
	],
	cache: true,
	bail: false,
	devtool: false,
	stats: 'errors-only',
	performance: {
		hints: false
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					warnings: false,
					compress: {
						comparisons: false
					},
					mangle: true,
					output: {
						comments: false,
						ascii_only: true
					}
				},
				parallel: true,
				cache: true,
				sourceMap: true
			})
		],
		nodeEnv: 'production',
		sideEffects: true,
		concatenateModules: true,
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				},
				main: {
					chunks: 'all',
					minChunks: 2,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		},
		runtimeChunk: true
	}
};

module.exports = config;
