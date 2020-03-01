require('dotenv').config()

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric', month: 'numeric', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
    },
    time: {
      hour: 'numeric', minute: 'numeric'
    }
  },
  de: {
    short: {
      day: 'numeric', month: 'numeric', year: 'numeric'
    },
    long: {
      day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
    },
    time: {
      hour: 'numeric', minute: 'numeric'
    }
  }
}

const numberFormats = {
  en: {
    currency: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  },
  de: {
    currency: {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }
}

module.exports = {
  mode: 'spa',
  debug: false,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * Remap ENV Variables
   */
  env: {
    apiBaseUrl: process.env.API_BASE_URL
  },
  /**
   * Configure Webpack Watchers
   */
  watchers: {
    webpack: {
      poll: 1000
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/portals' },
    { src: '~plugins/persistedStore' },
    { src: '~plugins/vueNotification' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', {}]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        locales: [
          {
            code: process.env.LOCALE_CODE,
            iso: process.env.LOCALE_ISO,
            name: process.env.LOCALE_NAME,
            file: process.env.LOCALE_FILE,
            domain: process.env.LOCALE_DOMAIN
          }
        ],
        lazy: true,
        differentDomains: true,
        langDir: 'lang/',
        strategy: 'prefix',
        vueI18n: {
          dateTimeFormats,
          numberFormats
        }
      }
    ]
  ],
  purgeCSS: {
    enabled: process.env.NODE_ENV === 'production',
    whitelist: [],
    whitelistPatterns: [],
    whitelistPatternsChildren: [],
    extractors: () => [
      {
        extractor: (content) => {
          return content.match(/[\w-/:]+(?<!:)/g)
        },
        extensions: ['html', 'vue', 'js']
      }
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_BASE_URL,
    proxy: false
  },
  /**
   * Axios Proxies
   */
  proxy: {},
  /**
   * Customize Router
   */
  router: {},
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-import': {},
        'postcss-preset-env': {},
        'postcss-custom-properties': {},
        cssnano: {
          discardComments: { removeAll: true },
          zindex: false,
          discardUnused: false,
          reduceIdents: false,
          mergeIdents: false
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: process.env.NODE_ENV === 'production',
          cascade: false
        },
        stage: 0
      }
    },
    /*
     ** Extract CSS
     */
    extractCSS: process.env.NODE_ENV === 'production',
    /**
     * Babel Config
     */
    babel: {
      presets ({ isServer }) {
        const targets = isServer
          ? { node: 'current' }
          : { ie: '11' }

        return [
          [require.resolve('@nuxt/babel-preset-app'), { targets }]
        ]
      },
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (process.dev) {
        config.devtool = '#eval-source-map'
      }
    }
  }
}
