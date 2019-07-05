const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PwaManifestWebpackPlugin = require('pwa-manifest-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'public');

const manifestConfig = require('./webpack/manifest.config');

const pages = [
  {
    baseName: 'index',
    chunks: ['home']
  },
  {
    baseName: 'cv',
    chunks: ['app']
  },
  {
    baseName: '404',
    chunks: ['app']
  }
];

const config = {
  entry: {
    'app': `${SRC_DIR}/js/app.js`,
    'home': `${SRC_DIR}/js/pages/home.js`
  },
  output: {
    path: DIST_DIR,
    filename: '[name].[contenthash].js'
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
            //options: {},
          },
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.map(page => {
      return new HtmlWebPackPlugin({
        template: `${SRC_DIR}/html/${page.baseName}.html`,
        filename: `./${page.baseName}.html`,
        chunks: page.chunks
      });
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin([
      {
        from: `${SRC_DIR}/assets`,
        to: `${DIST_DIR}/assets`
      }
    ]),
    new WorkboxPlugin.GenerateSW({
      importsDirectory: 'sw',
      clientsClaim: true,
      skipWaiting: true
    }),
    new PwaManifestWebpackPlugin(manifestConfig)
  ]
};

module.exports = config;
