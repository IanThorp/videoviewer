const path = require('path')

module.exports = {
	context: __dirname,
  entry: './js/BrowserEntry.jsx',
  output: {
<<<<<<< HEAD
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/js')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
=======
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
    extensions: ['', '.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		preLoaders: [
		  {
		  	test: /\.jsx?$/,
		  	loader: "eslint-loader",
		  	exclude: /node_modules/
		  }
		],
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
			  test: /\.json$/,
			  loader: 'json-loader'
			}
		]
	}
}
>>>>>>> 680d293c838d9054a99abf6850e58b6702070787
