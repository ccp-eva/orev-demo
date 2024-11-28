const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  return {
    mode: mode,
    entry: {
      index: './src/index.js',
      instructions: './src/instructions.js',
      orev: './src/orev.js',
      goodbye: './src/goodbye.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(s[ac]|c)ss$/i, // regex: (starts with an s, then either a or c) OR css /i is case insensitive
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ],
        },
      ],
    },

    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'public/', to: './' }],
      }),
      new MiniCssExtractPlugin(),
    ],

    // enables hot reload (WDS) for dev-server
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'), // that should point where you index.html is
      },
      port: 3000,
      open: { app: { name: 'google chrome' }, target: ['index.html'] },
      hot: true, // enable hot reload
      compress: true, // enable gzip compression
      historyApiFallback: true, // enable HTML5 history API
      devMiddleware: { writeToDisk: true }, // write files to dist in dev mode and auto refreshes changes
    },
  };
};
