const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'index.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js$|jsx$)/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};