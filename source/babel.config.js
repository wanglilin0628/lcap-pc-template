module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry',
      corejs: 3,
      polyfills: ['es.promise', 'es.symbol']
    }]
  ]
}
