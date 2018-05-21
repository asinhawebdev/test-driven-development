module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [ {
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [ "env", "react" ]
				}
			}
		} ]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
