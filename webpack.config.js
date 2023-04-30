const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              additionalData: `
                @import "src/scss/variables";
                @import "src/scss/mixins";
              `,
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'dist')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                js: 'babel-loader',
                scss: 'vue-style-loader!css-loader!sass-loader',
            },
        },
    },
    ],
  },

  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
    },
},

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
  ],
  
  devtool: 'inline-source-map',
};
