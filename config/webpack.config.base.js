const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name]-[hash:5].js',
    chunkFilename: 'scripts/[name]-[hash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        include: /src/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name]-[hash].[ext]',
        },
        include: /src/,
      },
      {
        test: /\.(otf|woff|woff2|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          mimetype: 'application/font-woff',
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.svg', '.png', '.jpg', ],
  },
}
