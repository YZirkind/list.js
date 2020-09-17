const webpack = require('webpack'),
      TerserPlugin = require('terser-webpack-plugin');
      PACKAGE = require('./package.json');

module.exports = {
  entry: {
    list: './src/index.js',
    "list.min": './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].js",
    library: 'List'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules|src\/utils\/extend\.js)/,
      loader: "eslint-loader"
    }]
  },
  devServer: {
    inline: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'List.js v' + PACKAGE.version + ' (' + PACKAGE.homepage + ') by ' + PACKAGE.author.name + ' (' + PACKAGE.author.url + ')'
    })
  ]
};
