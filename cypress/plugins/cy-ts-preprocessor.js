const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // loaders: ['ts-loader', 'angular2-template-loader'],
        use: [
          'angular-router-loader',
          'angular2-template-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          }, {
            loader: 'angular2-template-loader',
          }],
        exclude: [/node_modules/],
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: /\.async\.(css)$/,
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        exclude: /\.async\.(css)$/,
      },
      {
        test: /\.async\.(html|css)$/,
        loaders: ['file?name=[name].[hash].[ext]', 'extract'],
      },
    ],
  },
};

const options = {
  webpackOptions,
};

module.exports = wp(options);
