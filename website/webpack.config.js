module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/bin',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.sass$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
