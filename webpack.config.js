const path = require('node:path')
const {VueLoaderPlugin} = require('vue-loader')
const UnoCSS = require('@unocss/webpack').default

// webpack.config.js

module.exports = (env = {}) =>  {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, './main.js'),
    devServer: {
      hot: true,
      static: __dirname,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      UnoCSS(),
    ],
    optimization: {
      realContentHash: true,
    },
  }
}