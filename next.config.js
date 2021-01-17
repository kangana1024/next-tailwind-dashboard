const { withPlugins } = require('next-compose-plugins')
const withPWA = require("next-pwa")
const prod = process.env.NODE_ENV === 'production'

const configs = {
  image: {
    domains: ['*']
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config
  }
}


module.exports = withPlugins([
  withPWA({
    pwa: {
      disable: prod ? false : true,
      dest: 'public'
    }
  }),
  configs
])