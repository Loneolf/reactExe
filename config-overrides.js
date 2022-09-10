const { override, fixBabelImports, addWebpackAlias  } = require('customize-cra');

// 引入路径模块
const path = require('path');

function resolve(pathname) {
  return path.resolve(__dirname, pathname);
}

module.exports = override(
  // 按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  // // 配置绝对路径
  addWebpackAlias({
    context: resolve('./src/context'),
    pages: resolve('./src/pages'),
    assets: resolve('./src/assets'),
    components: resolve('./src/components'),
    service: resolve('./src/service'),
    utils: resolve('./src/utils'),
    store: resolve('./src/store'),
    '@': resolve('./src')
  }),

  // // // 加载less
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: {
  //     '@primary-color': '#FF6800'
  //   }
  // }),
);
