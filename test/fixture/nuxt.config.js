const { resolve } = require('path')
require('dotenv').config()

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  mode: 'spa',
  css: [
    '@/assets/ds.sass'
  ],
  build: {
    extractCSS: true
  },
  buildModules: [
    { handler: require('../../') }
  ],
}
