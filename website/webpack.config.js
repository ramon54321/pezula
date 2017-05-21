module.exports = {
  entry: {
    index: './client/src/index.js'
  },
  output: {
    path: __dirname + '/client/bin',
    filename: 'static/[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.sass$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: "url-loader" }
    ]
  }
};
