// const polyfill = []

// const umd = {
//   entry: polyfill.concat(['./src/index.js']),
//   output: {
//     path: `${__dirname}/dist`,
//     filename: 'index.js',
//     library: 'xgplayer-mp4',
//     libraryTarget: 'umd'
//   },
//   mode: 'production',
//   module: {
//     rules: [{
//       test: /\.js$/,
//       loader: 'babel-loader'
//     }, {
//       test: /\.scss$/,
//       use: [
//         'style-loader',
//         {
//           loader: 'css-loader',
//           options: {
//             importLoaders: 1,
//             minimize: true
//           }
//         },
//         'postcss-loader',
//         'sass-loader'
//       ]
//     }]
//   },
//   externals: {
//     'xgplayer': 'xgplayer'
//   },
//   optimization: {
//     minimize: true
//   }
// }

// const client = {
//   entry: polyfill.concat(['./src/index.js']),
//   output: {
//     path: `${__dirname}/browser`,
//     filename: 'index.js'
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       loader: 'babel-loader'
//     }]
//   },
//   externals: {
//     'xgplayer': 'Player'
//   },
//   mode: 'production',
//   optimization: {
//     minimize: true
//   }
// }

// module.exports = [umd, client]
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  externals: {
    xgplayer: 'Player'
  },
  optimization: {
    minimize: true
  }
}
