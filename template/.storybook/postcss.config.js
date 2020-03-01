module.exports = {
  plugins: {
    'postcss-custom-properties': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: 'last 2 versions'
    },
    'postcss-import': {},
    'postcss-nested': {}
  }
}
