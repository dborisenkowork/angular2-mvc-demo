var webpack = require("webpack");

function WebpackConfigBuilder() {
  this.wwwPath = '/';
  this.bundlesDir = 'app/bundle';
}

WebpackConfigBuilder.prototype = {
  build: function() {
    return {
      entry: [
        './app/app.ts'
      ],
      output: {
        filename: '[name].js',
        path: this.bundlesDir,
        publicPath: this.wwwPath
      },
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      watchOptions: {
        poll: true
      },
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            query: {
              'compilerOptions': {
                'module': 'commonjs',
                'emitDecoratorMetadata': true,
                'experimentalDecorators': true,
                'sourceMap': true,
                'target': 'es5'
              },
              'ignoreDiagnostics': [
                2403, // 2403 -> Subsequent variable declarations
                2300, // 2300 -> Duplicate identifier
                2374, // 2374 -> Duplicate number index signature
                2375, // 2375 -> Duplicate string index signature
              ]
            },
            exclude: [
              /\.(spec|e2e)\.ts$/,
              /node_modules\/(?!(ng2-.+))/
            ]
          },
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            test: /\.scss$/,
            loaders: ["raw-loader", "sass"]
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
          },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" }
        ]
      }
    }
  }
};

module.exports = (new WebpackConfigBuilder()).build();