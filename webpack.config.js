const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
module.exports = config;
