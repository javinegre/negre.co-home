const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const DIST_PATH = 'dist';
const DIST_DIR = `${PUBLIC_DIR}/${DIST_PATH}`;

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
    'home': `${SRC_DIR}/js/home.js`
  },
  output: {
    path: DIST_DIR,
    filename: '[name].[contenthash].js',
    publicPath: `${DIST_PATH}/`
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
    })
  ]
};

module.exports = config;
