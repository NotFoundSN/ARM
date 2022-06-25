const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
  app.use(
    '/img/productosImagenes',
    createProxyMiddleware({
      target: 'http://localhost:3000/img/productosImagenes/',
      changeOrigin: true,
    })
  );
};