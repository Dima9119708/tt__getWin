import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

interface IBuildEnv {
  mode: 'development' | 'production'
  port: number,
  apiURL: string,
  baseRoute: string,
}

export default (env: IBuildEnv) => {
  const port = env.port || 3000;
  const mode = env?.mode || 'development';
  const isDev = mode === 'development';
  const isProd = !isDev;
  const apiUrl = env?.apiURL || 'http://localhost:8000';
  const baseRoute = env.baseRoute || '/';

  const devServer: DevServerConfiguration = {
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
  };

  let config: webpack.Configuration;
  config = {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: isDev
        ? 'static/js/bundle.js'
        : 'static/js/[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
      publicPath: isDev ? '/' : '',
      assetModuleFilename: 'static/media/[name].[hash][ext]',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      preferAbsolute: true,
      mainFiles: ['index'],
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
      alias: {},
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true
            }
          },
          extractComments: false,
          include: /static\/.*/i,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new webpack.DefinePlugin({
        __BASE_APP_ROUTE__: JSON.stringify(baseRoute),
      }),
      isProd && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
      isProd && new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'build'),
            globOptions: {
              ignore: ['**/index.html', '**/manifest.json'],
            },
          },
        ],
      }),
      isProd && new WebpackManifestPlugin({}),
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),
      isDev && new ForkTsCheckerWebpackPlugin(),
    ],
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? devServer : undefined,
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
              ],
              plugins: [
                ['@babel/plugin-transform-typescript', { isTSX: true }],
                '@babel/plugin-transform-runtime',
              ],
            },
          },
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (pathFile: string) => Boolean(pathFile.includes('.module.')),
                  localIdentName: isDev
                    ? '[local]--[hash:base64:5]'
                    : '[hash:base64:5]',
                },
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
  };

  return config;
};
