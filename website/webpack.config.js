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
      { test: /\.sass$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
