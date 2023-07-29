const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    ["/api"],
    createProxyMiddleware({
      target: "https://finally-api-production.up.railway.app/",
      changeOrigin: true,
    })
  );
};
