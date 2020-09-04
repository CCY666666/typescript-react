/*
 * @Date: 2020-04-27 21:36:57
 * @LastEditTime: 2020-09-02 13:55:00
 * @Description: 设置接口代理
 */

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use('/group1', createProxyMiddleware({
    target: 'http://113.125.201.131:9300',
    changeOrigin: true,
  }))
}

