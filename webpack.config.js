const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./config/parts');

const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;
const PATHS = {
	app: path.join(__dirname, 'app'),
	style: [
		path.join(__dirname, 'app/styles', 'main.css')
	],
	build: path.join(__dirname, 'build'),
	test: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

const common = merge(
	{
		entry: {
			app: PATHS.app
		},
		output: {
			path: PATHS.build,
			filename: '[name].js'
			//publicPath: ''
		},
		// resolve.extensions allows imports without an extension eg/ import Button from './Button';
		resolve: {
			extensions: ['', '.js', '.jsx', '.json']
		}
	},
	parts.indexTemplate({
		title: 'Retro board demo app',
		appMountId: 'root'
	}),
	parts.loadJSX(PATHS.app),
	parts.lintJSX(PATHS.app),
	parts.loadJSON(),
	{
		externals: {
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': 'window'
		}
	}
);

var config;

// Detect how npm is run and branch based on that
switch(TARGET) {
	case 'build':
	case 'stats':
		config = merge(
			common,
			{
				devtool: 'source-map',
				entry: {
					style: PATHS.style
				},
				output: {
					path: PATHS.build,
					filename: '[name].[chunkhash].js',
					chunkFilename: '[chunkhash].js'
				}
			},
			parts.clean(PATHS.build),
			parts.setFreeVariable(
				'process.env.NODE_ENV',
				'production'
			),
			parts.extractBundle({
				name: 'vendor',
				entries: ['react', 'react-dom']
			}),
			parts.minify(),
			parts.extractCSS(PATHS.style)
		);
		break;
	case 'test':
	case 'test:watch':
		config = merge(
			common,
			{
				devtool: 'inline-source-map'
			},
			parts.loadJSX([PATHS.app, PATHS.test])
		);
		break;
	default:
		// ie. Development config
		config = merge(
			common,
			{
				devtool: 'eval-source-map',
				entry: {
					style: PATHS.style
				}
			},
			parts.setupCSS(),
			parts.setupImages(),
			parts.setupFonts(),
			parts.devServer({
				// Customize host/port here if needed
				host: process.env.HOST,
				port: 9000,
				poll: ENABLE_POLLING
			}),
			parts.enableReactPerformanceTools(),
			parts.npmInstall()
		);
}

module.exports = validate(config, {
	quiet: true
});
