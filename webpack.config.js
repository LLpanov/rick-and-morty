module.exports = {
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'resolve-url-loader',
						options: {
							removeCR: true
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			}
		]
	}
};
