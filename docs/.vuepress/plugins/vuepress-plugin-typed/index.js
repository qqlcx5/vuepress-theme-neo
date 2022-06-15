const path = require('path')
module.exports = options => ({
    name: 'vuepress-plugin-typed',
    define: {
        TYPED_OPTIONS: options || {}
    },
    clientConfigFile: path.resolve(__dirname, 'lib/clientRootMixin.js')
})
