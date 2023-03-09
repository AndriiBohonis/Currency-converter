const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/NBUStatService',
		createProxyMiddleware({
			target: 'https://bank.gov.ua',
			changeOrigin: true,
		})
	)
}
