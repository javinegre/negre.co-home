/* global require module __dirname  */

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const PwaManifestWebpackPlugin = require('pwa-manifest-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'public');

// const manifestConfig = require('./webpack/manifest.config');

const pages = [
  {
    baseName: 'index',
    chunks: ['home'],
  },
  {
    baseName: 'cv',
    chunks: ['app'],
  },
  {
    baseName: '404',
    chunks: ['app'],
  },
];

const config = {
  entry: {
    app: `${SRC_DIR}/ts/app`,
    home: `${SRC_DIR}/ts/pages/home`,
  },
  output: {
    path: DIST_DIR,
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.map(
      (page) =>
        new HtmlWebPackPlugin({
          template: `${SRC_DIR}/html/${page.baseName}.html`,
          filename: `./${page.baseName}.html`,
          chunks: page.chunks,
          minify: false,
        }),
    ),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${SRC_DIR}/assets`,
          to: `${DIST_DIR}/assets`,
        },
      ],
    }),
    // new WorkboxPlugin.GenerateSW({
    //   importsDirectory: 'sw',
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    // new PwaManifestWebpackPlugin(manifestConfig),
  ],
};

module.exports = config;
