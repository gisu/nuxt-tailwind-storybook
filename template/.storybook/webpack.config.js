const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.?css$/,
        include: path.resolve(__dirname, '../'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './.storybook/postcss.config.js'
              },
              ident: 'postcss',
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname))
    }
  }
}
