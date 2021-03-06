const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
	// inform webpack we are building a bundle for nodejs, rather
	// than browser
	target: 'node',
	// tell webpack the root
	entry: './src/index.js',
	// output object tell webpack where to place output
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	}
};

module.exports = merge(baseConfig, config);