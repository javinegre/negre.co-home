const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public/dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/js/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            failOnError: false,
            failOnWarning: false,
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: BUILD_DIR,
              // hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin('style.css')
  ]
};

module.exports = config;
