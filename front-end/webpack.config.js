var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: {
    client: path.join(__dirname,'src','js','index.js')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', // The backup style loader
          use: [
            'css-loader?sourceMap',
            'sass-loader?sourceMap&indentedSyntax'
          ],
        })
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].html',
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].min.js"
  },  
  plugins: [
      new ExtractTextPlugin('css/styles.css')
  ]
};
