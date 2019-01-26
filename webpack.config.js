const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    MinifyPlugin = require('babel-minify-webpack-plugin');

/**
 * All production resources are sent to a /dist folder.
 * Both JS and CSS is minified.
 */
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'dist/js/[name]-bundle.js',
    path: __dirname + '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, '/node_modules/'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react'] 
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({filename: './dist/css/[name]-bundle.css'}),
    new MinifyPlugin(),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
};
