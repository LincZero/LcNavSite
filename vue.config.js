const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

// function getEntry(globPath) { // 配置pages多页面获取当前文件夹下的html和js
//   let entries = {};
//   glob.sync(globPath).forEach(function (entry) {
//     var tmp = entry.split('/').splice(-3);
//     entries[tmp[1]] = {
//       entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.js',
//       template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.html',
//       filename: tmp[1]
//     };
//   });
//   return entries;
// }
// let pages = getEntry('./src/pages/**?/*.html');

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
    });
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, // 优化、不生成Map文件
  configureWebpack: config => { // 优化、GZip压缩
    if(process.env.NODE_ENV === 'production'){
        return {
            plugins: [new CompressionPlugin({
                test: /\.js$|\.html$|\.css/,
                threshold: 10240, // 超10k则压缩
                deleteOriginalAssets: false
            })]
        }
    }
}
  // entry: { // 多入口
  //   app: '@/main.js',
  //   one: '@/js/one.js',
  //   two: '@/js/two.js'
  // }
}
