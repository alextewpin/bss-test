const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = () => NODE_ENV === 'development';

module.exports = {
  entry: ['./src'],
  output: {
    path: './build',
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/components'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: __dirname + '/src',
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-2'],
        plugins: ['transform-class-properties']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'css?modules&importLoaders=1&localIdentName=[name]__[local]!postcss!sass')
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file?name=[name].[ext]'
    }]
  },
  watch: isDev(),
  devtool: isDev() ? 'inline-source-maps' : null,
  postcss: () => [autoprefixer],
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      ReactCSS: 'react-css-modules'
    }),
    new ExtractTextPlugin('main.css')
  ]
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new CleanPlugin('build'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
