import _defaultsDeep from 'lodash/defaultsDeep'

module.exports = function (moduleOptions) {
  _defaultsDeep(this.options, {
    build: {
      postcss: {
        plugins: {
          tailwindcss: {
            future: {
              purgeLayersByDefault: true,
              removeDeprecatedGapUtilities: true,
            }
          }
        }
      }
    }
  })

  if (!this.options.css.some(i => i.match(/[@~]\/assets\/ds.s[ca]ss/))) {
    this.options.css.push('@fourix/ds/ds.sass')
  }
}

module.exports.meta = require('../package.json')
