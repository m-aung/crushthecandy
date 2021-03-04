const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./client/index.js",
	output: {
		path: path.resolve(`${__dirname}/build`),
		publicPath: "/",
		filename: "bundle.js",
	},
	devServer: {
		host: "localhost",
		port: 3210,
		// match the output path
		contentBase: path.resolve(`${__dirname}/build`),
		// enable HMR on the devServer
		hot: true,
		// match the output 'publicPath'
		publicPath: "/",
		// fallback to root for other urls
		historyApiFallback: true,
		/**
		 * proxy is required in order to make api calls to
		 * express server while using hot-reload webpack server
		 * routes api fetch requests from localhost:8080/api/* (webpack dev server)
		 * to localhost:3000/api/* (where our Express server is running)
		 */
		proxy: {
			"/": {
				target: "http://localhost:3310/",
				secure: false,
			},
		},
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/, /client\/stylesheets\/modules/],
				use: ["style-loader", "css-loader"],
			},
		],
	},

	mode: "development",
	resolve: {
		// Enable importing JS / JSX files without specifying their extension
		extensions: [".js", ".jsx"],
	},
};
