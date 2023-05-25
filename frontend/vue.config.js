
const Dotenv = require('dotenv-webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
},

module.exports = {
  transpileDependencies: [
      'vue-meta',
  ],
},

module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
},

module.exports = {
  devServer: {
    proxy: {
      '^/': {
        target: 'http://49.13.3.226:3000',
        // target: 'http://localhost:3000',
        changeOrigin: true
      },
    }
  }
},

module.exports = {
  devServer: {
    port: 80,
    host: '0.0.0.0'
  }
},

module.exports = {
  chainWebpack: config => {
    
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
        .loader('graphql-tag/loader')
        .end()
      // Add another loader
      .use('other-loader')
        .loader('other-loader')
        .end()
        .tap(options => ({
          ...options,
          compilerOptions: {
            // treat any tag that starts with ion- as custom elements
            isCustomElement: tag => tag.startsWith('ion-')
          }
        }))
  }
}

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    
    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}


const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})

module.exports = {
  lintOnSave: false
}