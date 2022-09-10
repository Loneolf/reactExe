const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy(['/**/*.json', '/**/*.xhtml', '!**/mock/**/*.json', '!**/manifest.json', '!**/hot-update.json'], {
      target: 'http://192.168.0.100:8849/wolf',
      changeOrigin: true
      // pathRewrite: {
      //     '^/': ''
      // }
    })
  );
};
