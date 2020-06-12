const path = require('path')

module.exports = {
  chainWebpack: config => { // 自动化导入
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: path.resolve(__dirname, './src/assets/css/var.scss'),
        })
        .end()
    })
  },
  entry: { // 多入口
    app: '@/main.js',
    one: '@/js/one.js',
    two: '@/js/two.js'
  }
}